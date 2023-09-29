import React from "react";
import Gallery from "./Gallery";
import "./css/portfolio.css";


function Portfolio() {
  return (
    <>
      <div className="container-portfolio">
        <h4 className="mt-2 mb-3">S.D Waterproofing Solutions</h4>
        <p className="mb-5" style={{ color: "#616263" }}>
          We provide professional waterproofing services for residential and
          commercial properties.
        </p>
      </div>

      <div>
        {/* <Gallery data={data} /> */}
        <Gallery/>
      </div>
    </>
  );
}

export default Portfolio;
