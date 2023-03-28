import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import { Autoplay } from "swiper";

export const Slider = () => {
  return (
    <>
      <div className="container my-5">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            480: {
              width: 480,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={3}
        >
          <SwiperSlide>
            <div className="item d-flex  align-items-center ">
              <img
                src="newsimage5.png"
                className="image-slider position-relative"
                alt=""
              />

              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item d-flex align-items-center ">
              <img src="newsimage8.png" className="image-slider" alt="" />
              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item d-flex align-items-center  ">
              <img src="newsimage1.png" className="image-slider" alt="" />
              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item d-flex  align-items-center ">
              <img src="newsimage6.png" className="image-slider" alt="" />
              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item d-flex  align-items-center">
              <img src="newsimage8.png" className="image-slider" alt="" />
              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item d-flex  align-items-center">
              <img src="newsimage9.png" className="image-slider" alt="" />
              <div className="item-info  ms-2 pt-2 w-100">
                <p className=" text-capitalize">
                  By daived hell{" "}
                  <span className="text-danger ps-2"> Dec 20,2033</span>
                </p>
                <h6 className=" fw-bold text-capitalize">
                  6 tips for building a good shipping boats
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
