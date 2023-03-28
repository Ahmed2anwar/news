import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="contact mt-5 pt-5">
        <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="contact-info">
              <h2 className="fw-bold py-5">Contact Us</h2>
              <div className="row">
                <div class="col-md-6 pb-3">
                  <label for="name" class="form-label fs-5 ">
                    Name:
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="col-md-6  pb-3">
                  <label for="inputPassword4" class="form-label fs-5">
                    Password:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>

                <div class="col-md-6 pb-3">
                  <label for="email" class="form-label fs-5 ">
                    Email:
                  </label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="col-md-6 pb-3">
                  <label for="subject" class="form-label fs-5">
                    Subject:
                  </label>
                  <input type="text" class="form-control" id="subject" />
                </div>
                <div className="col-md-12 form-label fs-5 pb-3">
                  <label className="">Your message:</label>
                  <textarea
                    class="mt-3  form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-end pb-4">
                <button className="btn text-white">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 ">
            <div className="info-location ps-5">
              <h2 className="fw-bold py-5">Info Location</h2>
              <div className="icons-info pb-4 mb-2 d-flex align-items-center " >
                <i class="fa-solid fa-house pe-2 fs-4"></i>
                <p className=" text-uppercase p-0 m-0">
                  {" "}
                  PO Box 16122 Collins Street West Victoria 8007 Australia{" "}
                </p>
              </div>
              <div className="icons-info pb-4 mb-2 d-flex align-items-center " >
              <i class="fa-solid fa-phone  pe-2 fs-4"></i>
                <p className=" text-uppercase p-0 m-0">
                  {" "}
                  (+12) 34567 890 123
                  {""}
                </p>
              </div>
              <div className="icons-info pb-4 mb-2 d-flex align-items-center " >
              <i class="fa-solid fa-envelope pe-2 fs-4"></i>
                <p className=" text-uppercase p-0 m-0">
                  {" "}
                  mail@example.com{" "}
                </p>
              </div>
              <div className="icons-info pb-4 mb-2 d-flex align-items-center " >
              <i class="fa-solid fa-earth-americas pe-2 fs-4"></i>
                <p className=" text-uppercase p-0 m-0">
                  {" "}
                  www.yourdomain.com{" "}
                </p>
              </div>
            </div>
            <h4 className="fw-bold ps-5">Find US</h4>
            <div className="icons d-flex pt-2  ps-5">
                  <div className="facebook  ">
                    <i class="fa-brands fa-facebook-f text-white "></i>
                  </div>
                  <div className="twitter ms-2">
                    <i class="fa-brands fa-twitter text-white"></i>
                  </div>
                  <div className="linkedin ms-2">
                    <i class="fa-brands fa-linkedin-in text-white"></i>
                  </div>
                  <div className="youtube ms-2">
                    <i class="fa-brands fa-youtube text-white"></i>
                  </div>
                  <div className="instagram ms-2">
                    <i class="fa-brands fa-instagram text-white"></i>
                  </div>
                </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
