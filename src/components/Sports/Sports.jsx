import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Pag } from "../Pagination/Pag";

export const Sports = () => {
  const { Sport } = useContext(NewsContext);

  return (
    <>
      <section className="sport  mt-5 pt-5">
        <div className="container pt-5">
          <div className="row g-4">
            <h2 className="fw-bold fs-1 pb-2">Sports </h2>
            <img src="1.png " className="image  pb-3" alt="" />

            {Sport.slice(30, 42).map((sport) => (
              <div className=" col-lg-3 col-md-4 col-sm-6">
                <div className="item">
                  <img src={sport.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {sport.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {sport.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {sport.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{sport.description.split(" ", 10).join(" ")}</p>
                </div>
              </div>
            ))}

            <img src="2.png" alt="" className="image w-100" />

            {Sport.slice(50, 62).map((sport) => (
              <div className=" col-lg-3 col-md-4 col-sm-6 pt-3">
                <div className="item bg-  position-relative  ">
                  <img src={sport.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {sport.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {sport.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {sport.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{sport.description.split(" ", 10).join(" ")}</p>
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
