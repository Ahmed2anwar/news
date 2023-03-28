import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Pag } from "../Pagination/Pag";

export const Fashion = () => {
  const { fashion } = useContext(NewsContext);
  return (
    <>
      <section className="fashion mt-5 pt-5">
        <div className="container pt-5">
          <div className="row g-4">
            <h2 className="fw-bold fs-1 pb-2">Fashion </h2>

            <img src="1.png " className="image w-100 pb-3" alt="" />
            {fashion.slice(30, 42).map((fashion) => (
              <div className=" col-lg-3 col-md-4 col-sm-6">
                <div className="item">
                  <img src={fashion.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {fashion.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {fashion.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {fashion.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{fashion.description.split(" ", 10).join(" ")}</p>
                </div>
              </div>
            ))}

            <img src="2.png" alt="" className="image w-100" />

            {fashion.slice(50, 62).map((fashion) => (
              <div className=" col-lg-3 col-md-4 col-sm-6 pt-3">
                <div className="item">
                  <img src={fashion.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {fashion.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {fashion.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {fashion.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{fashion.description.split(" ", 10).join(" ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pag />
    </>
  );
};
