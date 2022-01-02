export const videoUpload = async (videos) => {
    let videoArr = []
    for (const item of videos) {
        const formData = new FormData()
        formData.append("file", item)
        formData.append("upload_preset", process.env.CLOUD_UPDATE_PRESET)
        formData.append("cloud_name", process.env.CLOUD_NAME)

        const res = await fetch(process.env.CLOUD_API, {
            method: "POST",
            body: formData
        })

        const data = await res.json()
        videoArr.push({ public_id: data.public_id, url: data.secure_url })
    }
    return videoArr;
}