import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Pag } from "../Pagination/Pag";

export const Tech = () => {
  const { technology } = useContext(NewsContext);
  return (
    <>
      <section className="tech mt-5 pt-5 ">
        <div className="container  mt-5 ">
          <div className="row g-4">
            <h2 className="fw-bold fs-1 pb-2">Technology </h2>
            <img src="1.png " className="image w-100 pb-3" alt="" />

            {technology.slice(30, 42).map((technology) => (
              <div className=" col-lg-3 col-md-4 col-sm-6">
                <div className="item">
                  <img src={technology.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {technology.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {technology.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {technology.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{technology.description.split(" ", 10).join(" ")}</p>
                </div>
              </div>
            ))}

            <img src="2.png" alt="" className="image w-100" />

            {technology.slice(50, 62).map((technology) => (
              <div className=" col-lg-3 col-md-4 col-sm-6 pt-3">
                <div className="item">
                  <img src={technology.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {technology.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {technology.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {technology.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{technology.description.split(" ", 10).join(" ")}</p>
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
