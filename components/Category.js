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
  const { locale, pathname } = router;
  const t = locale === "en" ? en : uz;
  const [status, setStatus] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  console.log("router", pathname);

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
      <div
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
            <div className={`${categoryId === "Category" || categoryId === "kategoriyalar" ? "signal" : ""}`}></div>
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
      </div>
    </>
  );
};

export default Category;
