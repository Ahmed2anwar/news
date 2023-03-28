import React, { useContext } from "react";
import { NewsContext } from "../../NewsContext";
import "./AsdieSection.css";

export const AsideSection = () => {
  const { headline } = useContext(NewsContext);

  return (
    <>
      <section className="aside my-2 ">
        <div className="row">
          <div className="item">
            <img src="newsimage17.png" className="w-100" alt="" />
            <div className="item-info mt-2 ">
              <span className="span text-white px-2 py-1  ">TRAVEL</span>
              <p className="pt-2 ">
                {" "}
                <span className="text-danger pe-2">By David Hall</span>{" "}
                Descember 09, 2016
              </p>
              <h5 className="fw-bold ">
                Proin eu nisl et arcu iaculis placerat sollicitudin ut est
              </h5>
              <p className="pe-2">
                Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl
                et arcu iaculis placerat sollicitudin ut est. In fringilla dui
                dui.
              </p>
              <button className="btn btn-outline-danger fs-6 py-2 px-3">
                Read More{" "}
              </button>
            </div>
          </div>

          <div className="head-line ">
            <div className="main-title my-5">
              <h4 className="fw-bold">Top Headline</h4>
            </div>

            {headline.map((item) => (
              <div className="item border border-1 pt-3 ps-3">
                <span className="span text-white px-2 py-1 text-uppercase  ">
                  headline
                </span>
                <div className="d-flex pt-2 ">
                  <h6 className="fw-bold py-2">{item.title}</h6>
                </div>
              </div>
            ))}
           
          </div>
          <div className="news  ">
            <div className="main-title my-5">
              <h4 className="fw-bold">Trending Sports</h4>
            </div>
            <div className="item  d-flex ">
              <img src="news11.jpg" className="w-25" alt="" />
              <div className="ps-2">
                <p className=" ">
                  {" "}
                  <span className="text-danger pe-2">By David Hall</span>{" "}
                  Descember 09, 2016
                </p>
                <h6 className="fw-bold">
                  6 Best Tips For Building A Good Shipping Boat
                </h6>
              </div>
            </div>
            <div className="item mt-3 d-flex ">
              <img src="news7.jpg" className="w-25" alt="" />
              <div className="ps-2">
                <p className=" ">
                  {" "}
                  <span className="text-danger pe-2">By David Hall</span>{" "}
                  Descember 09, 2016
                </p>
                <h6 className="fw-bold">
                  6 Best Tips For Building A Good Shipping Boat
                </h6>
              </div>
            </div>
            <div className="item mt-3 d-flex ">
              <img src="news12.jpg" className="w-25" alt="" />
              <div className="ps-2">
                <p className=" ">
                  {" "}
                  <span className="text-danger pe-2">By David Hall</span>{" "}
                  Descember 09, 2016
                </p>
                <h6 className="fw-bold">
                  6 Best Tips For Building A Good Shipping Boat
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="main-title my-5">
          <h4 className="fw-bold">Stay Conected</h4>
        </div>
        <article className="icons  fw-bold text-white">
          <div className="facebook px-2  pt-2  d-flex justify-content-between ">
            <div className="">
              {" "}
              <p className="m-0 pb-2">
                <i class="fa-brands fa-facebook-f fs-5 pe-4 ps-2 "></i>{" "}
                <span className=" border-start ps-2">19,234 Fans</span>
              </p>
            </div>
            <div className="   ">
              {" "}
              <p className="border-start ps-2 m-0">like</p>
            </div>
          </div>
          <div className="twitter mt-2 px-2 pt-2  d-flex justify-content-between ">
            <div className="">
              {" "}
              <p className="m-0 pb-2">
                <i class="fa-brands fa-twitter ps-2 fs-5 pe-3"></i>{" "}
                <span className=" border-start ps-2">40,122 Follower</span>
              </p>
            </div>
            <div className="   ">
              {" "}
              <p className="border-start ps-2 m-0">Subscribe</p>
            </div>
          </div>
          <div className="youtube mt-2 px-2 pt-2  d-flex justify-content-between ">
            <div className="">
              {" "}
              <p className="m-0 pb-2">
                <i class="fa-brands fa-youtube ps-2 fs-5 pe-3"></i>{" "}
                <span className=" border-start ps-2">23,134 Follower</span>
              </p>
            </div>
            <div className="   ">
              {" "}
              <p className="border-start m-0 ps-2 ">Subscribe</p>
            </div>
          </div>
        </article>

        <article>
          <div className="main-title my-5">
            <h4 className="fw-bold">Newsletter</h4>
          </div>
          <div className="items">
            <h5 className="fw-bold">
              The most important world news and events of the day.
            </h5>
            <p>Get magzrenvi daily newsletter on your inbox.</p>
            <button className="btn2 btn btn-danger fs-6 py-2 px-3">
              Subscribe{" "}
            </button>
          </div>
        </article>

        <article className="tags">
          <div className="main-title my-5">
            <h4 className="fw-bold">Tags</h4>
          </div>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #Sea
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #life style{" "}
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #wfh
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #programming
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #gaming
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #sport
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #Sea
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #trendy
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #porprety
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #framework
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #trendy
          </button>
          <button className=" btn btn-outline-dark rounded-0 mx-1 my-1">
            #gaming
          </button>
        </article>

        <article className="category">
          <div className="main-title my-5">
            <h4 className="fw-bold">Category</h4>
          </div>

          <div className="box ">
            <div className="items  pt-3 d-flex justify-content-between ">
              <p className="">Life style</p>
              <p>14</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">photos</p>
              <p>4</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">videos</p>
              <p>10</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">trendy</p>
              <p>2</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">gaming</p>
              <p>6</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">travel</p>
              <p>12</p>
            </div>
            <div className="items pt-3 d-flex justify-content-between  ">
              <p className="">healthy</p>
              <p>12</p>
            </div>
          </div>
        </article>

        <article className="Advertise">
          <div className="main-title my-5">
            <h4 className="fw-bold">Advertise</h4>
          </div>
          <img src="banner6.jpg" className="w-100" alt="" />
        </article>
      </section>
    </>
  );
};
