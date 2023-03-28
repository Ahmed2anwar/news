import React from "react";
import "./Information.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import { Autoplay, Navigation } from "swiper";
export const Information = () => {
  return (
    <>
      <section>
      <div className="container mt-2 mb-4">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          className="slider"
        >
          <SwiperSlide>
            <div className="bg bg1 d-flex align-items-end  ">
              <div className="item text-white pb-4 ps-4 pe-5">
                <span className="span">football</span>
                <h2 className="pt-2 fw-bold">
                  tournment cancel becuase covid 19, and indonsia stay safe and
                  health
                </h2>
                <p className="">
                  By David Hall{" "}
                  <span className="fw-bold"> Descember 09, 2016</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg2 d-flex align-items-end  ">
              <div className="item text-white pb-4 ps-4 pe-5">
                <span className="span">football</span>
                <h2 className="pt-2 fw-bold">
                  tournment cancel becuase covid 19, and indonsia stay safe and
                  health
                </h2>
                <p className="">
                  By David Hall{" "}
                  <span className="fw-bold"> Descember 09, 2016</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg3 d-flex align-items-end  ">
              <div className="item text-white pb-4 ps-4 pe-5">
                <span className="span">sports</span>
                <h2 className="pt-2 fw-bold">
                  tournment cancel becuase covid 19, and indonsia stay safe and
                  health
                </h2>
                <p className="">
                  By David Hall{" "}
                  <span className="fw-bold"> Descember 09, 2016</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </section>

      <section>
        <div className="item">
          <div className="item-info d-flex align ps-3">
            <p className="parg">trending news</p>
            <h5 className="fw-bold ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
          </div>
          <img src="banner1.jpg" className="w-100 px-3" alt="" />
        </div>
      </section>
    </>
  );
};
