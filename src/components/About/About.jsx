import React from "react";

export const About = () => {
  return (
    <>
      <section className="about mt-5 pt-5">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold pb-3 fs-1 pt-5">About Us</h2>
            <div>
              <h4 className="pt-2">
                It is a long established fact that a reader will be distracted
              </h4>
              <p className="py-3 text-muted">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="pe-2 d-flex  align-items-center">
                  <i class="fa-solid fa-check pe-2 fs-4 text-danger"></i>
                  <p className="m-0 text-muted">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
                <div className="pe-2 pt-2 d-flex  align-items-center">
                  <i class="fa-solid fa-check pe-2 fs-4 text-danger"></i>
                  <p className="m-0 text-muted">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </p>
                </div>

                <div className="pe-2 pt-2 d-flex  align-items-center">
                  <i class="fa-solid fa-check pe-2 fs-4 text-danger"></i>
                  <p className="m-0 text-muted">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="items">
                <p className="text-muted">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <button className="btn btn-outline-danger">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 ">
        <div className="container">
          <div className="row g-5 py-4">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-1.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-3.png" className="img-fluid" alt="" />
              </div>{" "}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-4.png" className="img-fluid" alt="" />
              </div>{" "}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-5.png" className="img-fluid" alt="" />
              </div>{" "}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div>
                <img src="client-6.png" className="img-fluid" alt="" />
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6">
              <img src="features.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="about-accordion pt-4">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body text-muted">
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Feugiat scelerisque varius morbi enim nunc?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body text-muted">
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Dolor sit amet consectetur adipiscing elit?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body text-muted">
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header" id="flush-four">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#four"
                        aria-expanded="false"
                        aria-controls="four"
                      >
                        Dolor sit amet consectetur adipiscing elit?
                      </button>
                    </h2>
                    <div
                      id="four"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-four"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body text-muted">
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
