/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";

const Videos = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders, auth } = state;
  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  useEffect(() => {
    const arr = ((orders.map(item => item.cart)).map(item => item.filter(item2 => item2.book)).map(item => item.length !== 0 ? item.map(item2 => item2) : ""))
    let x = []
    const videoArr = orders.map(item => item.cart[0]).filter(ar => ar !== undefined)
    const videoArr2 = orders.map(item => item.cart[1]).filter(ar => ar !== undefined)
    const videoArr3 = orders.map(item => item.cart[2]).filter(ar => ar !== undefined)
    const videoArr4 = orders.map(item => item.cart[3]).filter(ar => ar !== undefined)
    const videoArr5 = orders.map(item => item.cart[4]).filter(ar => ar !== undefined)
    const arrr = (videoArr.map(item => x.push(item))) +
      (videoArr2.map(item => x.push(item))) +
      (videoArr3.map(item => x.push(item))) +
      (videoArr4.map(item => x.push(item))) +
      (videoArr5.map(item => x.push(item)))
    // console.log("videoArr2 >:", videoArr2);
    // console.log("videoArr3 >:", videoArr3);
    // console.log("videoArr4 >:", videoArr4);
    // console.log("videoArr5 >:", videoArr5);
    setDataVideo(x)
  }, [orders]);
  useEffect(() => {
    const newArr = dataVideo?.filter((order) => order._id === router.query.id);
    const newArr2 = newArr.length > 1 ? newArr[0] : newArr
    const newArr3 = newArr2.video !== undefined && newArr2.video;
    // setOrderDetail(newArr3[0]);
    setVideo(newArr3[0])
  }, [dataVideo]);
  // console.log("dataVideo >>>", dataVideo)
  console.log("orderDetail >:", orderDetail);
  // console.log("orders >:", orders);
  // console.log("router.query.id >:", router.query.id);

  const [pdfHeight, setPdfHeight] = useState("550")
  const [pdfWidth, setPdfWidth] = useState("400")
  const [tab, setTab] = useState(0);
  const [video, setVideo] = useState();
  // useEffect(() => {
  //   const arrVideo = ((orders.map(item => item.cart)).map(item => item.filter(item2 => item2.video)).map(item => item.length !== 0 ? item.map(item2 => item2) : ""))
  //   const arrVideo2 = (arrVideo.filter(item => item !== "").map(item => item[0]))
  //   const arrVideo3 = ((arrVideo2.map(item => item.video[0])))
  //   setVideo(arrVideo3[0])
  // }, [orders]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    let arr = []
    for (let key in video) {
      arr.push(video[key])
    }
    return setVideos(arr)
  }, [video])
  // console.log("videos sadsad >>>", videos)
  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  return (
    <>
      <Head>
        <title>Detail Product</title>
      </Head>
      <div className="Videos_container">
        <div className="videos_left">
          <ReactPlayer
            url={videos[tab]}
            width={pdfHeight}
            height={pdfWidth}
            playing={false}
            playIcon={<button>Play</button>}
            controls={true}
            config={{
              file: {
                attributes: {
                  onContextMenu: e => e.preventDefault(),
                  preload: "auto",
                  controlsList: 'nodownload'
                }
              }
            }}
          />

        </div>
        <div className="videos_right">
          {videos.map((item, index) => (
            <video key={index}
              src={item}
              className={`videos_card img-thumbnail rounded ${isActive(index)}`}

              onClick={() => setTab(index)}>
            </video>
          ))}
        </div>
      </div>
    </ >
  );
};



export default Videos;
