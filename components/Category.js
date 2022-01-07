/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import filterSearch from "../utils/filterSearch";
import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import { DataContext } from "../store/GlobalState";
import en from "../locales/en";
import uz from "../locales/uz";
const Category = () => {
  const { state } = useContext(DataContext);
  const { categories } = state;
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const t = locale === "en" ? en : uz;
  const [status, setStatus] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  // console.log("categoryName", categoryName);
  // console.log("categoryId", categoryId);
  useEffect(() => {
    locale === "en"
      ? setCategoryName("Category")
      : setCategoryName("kategoriyalar")
  }, [locale]);

  const click = () => {
    filterSearch({ router, category: null });
    router.push({ pathname: '/' });
    locale === "en"
      ? setCategoryName("Category")
      : setCategoryName("kategoriyalar")
  };
  let x = "? category ="
  const sensor = () => {
    if (asPath.includes('/?category') || asPath === "/") {
      filterSearch({ router, category: categoryId })
      // console.log("bor");
    } else {
      // console.log("Yo`q");

      router.push({ pathname: '/' });
      // let x = asPath.slice(asPath.indexOf("?"))
      // console.log("x qsadsdads", x);
      // router.asPath = x
      // router.push({ pathname: x });
      // filterSearch({ router, category: categoryId })

      // if (asPath === "/") {

      //   setTimeout(() => {
      //     filterSearch({ router, category: categoryId })
      //     console.log('This will run after 1 second!')
      //   }, 1000);
      // }

    }
    // router.push({ pathname: '/' });
  };
  // console.log("pathname >>>>>", router);
  return (
    <>
      <div
        className="task__adderSelect"
        onMouseEnter={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
      >
        <p> {categoryName} </p>
        <div className={status ? "task__adderStatus" : "hide__status"}>
          <li className="status" onClick={click}
            onMouseEnter={() => setStatus(true)}
            onMouseLeave={() => setStatus(false)}>
            <p>All</p>
            <div className={`${categoryId === "Category" || categoryId === "kategoriyalar" ? "signal" : ""}`}></div>
          </li>

          {categories.map((item) => (
            <div
              href="/"
              className="status"
              onMouseEnter={() => setStatus(true)}
              onMouseLeave={() => setStatus(false)}
              onClick={() =>
                setCategoryName(item.name) +
                setCategoryId(item._id) +
                sensor()
                // filterSearch({ router, category: item._id })
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
      </div>
    </>
  );
};

export default Category;
