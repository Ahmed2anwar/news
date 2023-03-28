import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="footer pb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="items text-white mt-4">
                <img src="logo2.png" className="w-50 " alt="" />
                <p className=" text-capitalize pt-2 ps-2 pe-4  pt-3">
                  Retnews is a premium magazine template based on Bootstrap 4.
                  We bring you the best Premium Themes that perfect for news,
                  magazine, personal blog, etc.
                </p>
                <h4 className="py-3 px-2  fw-bold ">Follow Us</h4>
                <div className="icons d-flex  ps-2">
                  <div className="facebook  ">
                    <i class="fa-brands fa-facebook-f "></i>
                  </div>
                  <div className="twitter ms-2">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="linkedin ms-2">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="youtube ms-2">
                    <i class="fa-brands fa-youtube"></i>
                  </div>
                  <div className="instagram ms-2">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="item text-white mt-4">
                <h4 className="py-3   fw-bold ">Category</h4>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 ">
                    <div className="list pt-3">
                      <ul className=" fw-bold text-capitalize list-unstyled  ">
                        <li>apps</li>
                        <li>bussines</li>
                        <li>entirtainment</li>
                        <li>fashion</li>
                        <li>food</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4  col-sm-6">
                    <div className="list pt-3 ps-lg-3">
                      <ul className=" fw-bold text-capitalize list-unstyled  ">
                        <li>gadegt</li>
                        <li>gaming</li>
                        <li>health</li>
                        <li>lifestyle</li>
                        <li>Science</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4  col-md-4 col-sm-6">
                    <div className="list pt-3">
                      <ul className=" fw-bold text-capitalize list-unstyled  ">
                        <li>sports</li>
                        <li>travel</li>
                        <li>startup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  col-sm-12">
              <div className="Newsletter text-white mt-4">
                <h4 className="py-3   fw-bold ">Newsletter</h4>
                <p className="pt-3">
                  Don’t miss to subscribe to our news feeds, kindly fill the
                  form below
                </p>
                <input
                  className=" form-control py-2"
                  placeholder="Your Email Address"
                  type="text"
                  name=""
                  id=""
                />
                <button className="btn btn-danger text-uppercase w-100 mt-2">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white pt-5">
          <p className="">
            © Copyright by <span className="text-danger fs-5">Anwar</span> All
            Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};
