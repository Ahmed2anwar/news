import { useContext } from "react";
import { NewsContext } from "../../NewsContext";

import "./Bussines.css";
export const Bussines = () => {
  const { Bussiness, Apple, wolfStreet, health, football } =
    useContext(NewsContext);
    
  return (
    <>
      <section className="Bussines mb-3 mt-1">
        <div className="row">
          <div className="main-title my-4">
            <h4 className="fw-bold">Tesla</h4>
          </div>

          {Bussiness.map((item) => (
            <div className=" col-md-4 col-sm-6">
              <div className="item">
                <img src={item.urlToImage} className="w-100" alt="a" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold text-danger py-2 m-0 ">
                    {item.author.split(" ", 2).join(" ")}{" "}
                  </p>
                  <span className="text-muted pe-2 ">
                    {" "}
                    {item.publishedAt.split("-", 2).join("-")}
                  </span>
                </div>
                <h5 className="fw-bold ">
                  {item.title.split(" ", 7).join(" ")}
                </h5>
                <p>{item.description.split(" ", 10).join(" ")}</p>
              </div>
            </div>
          ))}

          <div className="main-title my-4">
            <h4 className="fw-bold">Apple</h4>
          </div>

          {Apple.map((item) => (
            <div className=" col-md-4 col-sm-6">
              <div className="item">
                <img src={item.urlToImage} className="w-100" alt="a" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold text-danger py-2 m-0 ">
                    {item.author.split(" ", 2).join(" ")}{" "}
                  </p>
                  <span className="text-muted pe-2 ">
                    {" "}
                    {item.publishedAt.split("-", 2).join("-")}
                  </span>
                </div>
                <h5 className="fw-bold">
                  {item.title.split(" ", 5).join(" ")}
                </h5>
                <p>{item.description.split(" ", 11).join(" ")}</p>
              </div>
            </div>
          ))}

          <div className="main-title my-4">
            <h4 className="fw-bold">wolf street</h4>
          </div>

          {wolfStreet.map((item) => (
            <div className=" col-md-4 col-sm-6">
              <div className="item">
                <img src={item.urlToImage} className="w-100" alt="a" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold text-danger py-2 m-0 ">
                    {item.author.split(" ", 2).join(" ")}{" "}
                  </p>
                  <span className="text-muted pe-2 ">
                    {" "}
                    {item.publishedAt.split("-", 2).join("-")}
                  </span>
                </div>
                <h5 className="fw-bold">
                  {item.title.split(" ", 5).join(" ")}
                </h5>
                <p>{item.description.split(" ", 15).join(" ")}</p>
              </div>
            </div>
          ))}
          <div className="main-title my-4">
            <h4 className="fw-bold">Health</h4>
          </div>

          {health.map((item) => (
            <div className=" col-md-4 col-sm-6">
              <div className="item">
                <img src={item.urlToImage} className="w-100" alt="a" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold text-danger py-2 m-0 ">
                    {item.author.split(" ", 2).join(" ")}{" "}
                  </p>
                  <span className="text-muted pe-2 ">
                    {" "}
                    {item.publishedAt.split("-", 2).join("-")}
                  </span>
                </div>
                <h5 className="fw-bold">
                  {item.title.split(" ", 7).join(" ")}
                </h5>
                <p>{item.description.split(" ", 12).join(" ")}</p>
              </div>
            </div>
          ))}
          <div className="main-title my-4">
            <h4 className="fw-bold">Football</h4>
          </div>

          {football.map((item) => (
            <div className=" col-md-4 col-sm-6">
              <div className="item">
                <img src={item.urlToImage} className="w-100" alt="a" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold text-danger py-2 m-0 ">
                    {item.author.split(" ", 2).join(" ")}{" "}
                  </p>
                  <span className="text-muted pe-2 ">
                    {" "}
                    {item.publishedAt.split("-", 2).join("-")}
                  </span>
                </div>
                <h5 className="fw-bold">
                  {item.title.split(" ", 7).join(" ")}
                </h5>
                <p>{item.description.split(" ", 15).join(" ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
