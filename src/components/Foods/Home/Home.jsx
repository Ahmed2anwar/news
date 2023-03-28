import React from "react";
import { Slider } from "../Slider/Slider";
import { AsideSection } from "./AsideSection/AsideSection";
import { Bussines } from "./Bussines/Bussines";
import { Information } from "./Informtion/Information";

export const Home = () => {
  return (
    <>
      <div className="container mt-5 pt-3">
        <div className="row">
          <Slider />
          <div className="col-lg-8 col-md-12">
            <Information />
            <Bussines />
          </div>
          <div className="col-lg-4 col-md-12">
            <AsideSection />
          </div>
        </div>
      </div>
    </>
  );
};
