import React from "react";

export const Pag = () => {
  return (<>
      <section class="pag  pb-2 pt-5">
        <div class="container">
          <div className="d-flex justify-content-center">
          <span class="pag-number">
              <i class="fa-solid fa-arrow-left"></i>
            </span>
            <span class="pag-number">1</span>
            <span class="pag-number">2</span>
            <span class="pag-number">3</span>
            <span class="pag-number">4</span>
            <span class="pag-number">5</span>
            <span class="pag-number">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
