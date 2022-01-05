/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import filterSearch from "../../utils/filterSearch";
import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import { DataContext } from "../../store/GlobalState";
import en from "../../locales/en";
import { GrPersonalComputer } from "react-icons/gr"
import { BiGridSmall } from "react-icons/bi"
import { GiCakeSlice } from "react-icons/gi"
import { FaRegFileVideo } from "react-icons/fa"
import { ImBooks } from "react-icons/im"
import uz from "../../locales/uz";
const MediaCategory = () => {
  const { state } = useContext(DataContext);
  const { categories } = state;
  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : uz;
  const [status, setStatus] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const scrollPreview = useRef();
  useEffect(() => {
    locale === "en"
      ? setCategoryId("Category")
      : setCategoryId("kategoriyalar")
  }, [locale]);

  const click = () => {
    filterSearch({ router, category: null });
    router.push({ pathname: '/' });
    locale === "en"
      ? setCategoryId("Category")
      : setCategoryId("kategoriyalar")

  };


  return (
    <>

      <div className="mediaCategory_container" >

        {categories.map((item) => (<>
          <li className="mediaCategory_listItem"
            onClick={() =>
              setCategoryId(item.name) +
              filterSearch({ router, category: item._id })
            }
            key={item._id}
            value={item._id}
          >
            <span> {item.name === "technology" && <><GrPersonalComputer /><b>{item.name}</b>
            </>
            }
              {item.name === "shirinliklar" && <><GiCakeSlice /><b>{item.name}</b>
              </>}
              {item.name === "video courses" && <><FaRegFileVideo /><b>{item.name}</b>
              </>}
              {item.name === "Books" && <><ImBooks /><b>{item.name}</b>
              </>}
            </span>
          </li>
        </>))}

      </div>
      {/* <div
        className="task__adderSelect"
        onMouseEnter={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
      >
        <p> {categoryId} </p>
        <div className={status ? "task__adderStatus" : "hide__status"}>
          <li className="status" onClick={click}
            onMouseEnter={() => setStatus(true)}
            onMouseLeave={() => setStatus(false)}>
            <p>All</p>
            <div className={`${signal ? "signal" : ""}`}></div>
          </li>

          {categories.map((item) => (
            <div
              href="/"
              className="status"
              onMouseEnter={() => setStatus(true)}
              onMouseLeave={() => setStatus(false)}
              onClick={() =>
                setCategoryId(item.name) +
                filterSearch({ router, category: item._id })
              }
              key={item._id}
              value={item._id}
            >
              <p>{item.name}</p>
              {categoryId === item.name ? <b className="signal"></b> : ""}
            </div>
          ))}
        </div>
        <BsThreeDots />
      </div> */}
    </>
  );
};

export default MediaCategory;
