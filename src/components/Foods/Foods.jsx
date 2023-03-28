import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Pag } from "../Pagination/Pag";

export const Foods = () => {
  const { foods } = useContext(NewsContext);
  return (
    <>
      <section className="foods mt-5 pt-5">
        <div className="container  mt-5 ">
          <div className="row g-4">
            <h2 className="fw-bold fs-1 pb-2">Foods </h2>

            <img src="1.png " className="image w-100  pb-3" alt="" />
            {foods.slice(20, 32).map((foods) => (
              <div className=" col-lg-3 col-md-4 col-sm-6">
                <div className="item">
                  <img src={foods.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {foods.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {foods.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {foods.title.split(" ", 7).join(" ")}
                  </h5>
                  <p>{foods.description.split(" ", 10).join(" ")}</p>
                </div>
              </div>
            ))}

            <img src="2.png" alt="" className="image w-100" />

            {foods.slice(36, 48).map((foods) => (
              <div className=" col-lg-3 col-md-4 col-sm-6 pt-3">
                <div className="item">
                  <img src={foods.urlToImage} className="w-100" alt="a" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold text-danger py-2 m-0 ">
                      {foods.author.split(" ", 2).join(" ")}{" "}
                    </p>
                    <span className="text-muted pe-2 ">
                      {" "}
                      {foods.publishedAt.split("-", 2).join("-")}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 ">
                    {foods.title.split(" ", 4).join(" ")}
                  </h5>
                  <p>{foods.description.split(" ", 20).join(" ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pag/>

      
    </>
  );
};
