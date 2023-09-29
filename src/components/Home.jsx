import React from "react";
import About from "./About";
import { Link } from "react-router-dom";
import "./css/home.css";

function Home(props) {
  return (
    <div id="home">
      <div className="outer-container" style={{ padding: props.padding }}>
        <div className="blur-image"></div>
        <div className="inner-container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide position-relative"
            data-bs-ride="carousel" // Add this attribute
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h4 className="carousel-item-heading">
                  WELCOME TO S.D Water Proofing
                </h4>
                <p className="home-paragraph">
                  Are you a leak? Because S.D Water Proofing is here to seal you
                  up and keep you dry.
                </p>
              </div>
              <div className="carousel-item">
                <div className="d-flex gap-5 justify-content-center flex-wrap">
                  <div className="carousel-item-width">
                    <h4 className="mb-3 carousel-item-heading">Testing</h4>
                    <p className="home-paragraph">
                      An infrared camera can see and measure heat differences in
                      building materials on ceilings, walls, and floors.
                    </p>
                  </div>
                  <div className="carousel-item-width">
                    <h4 className="mb-3 carousel-item-heading">
                      Waterproofing
                    </h4>
                    <p className="home-paragraph">
                      We do all kinds of waterproofing from residential to
                      tunnels, dams, or underground drainage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <div className="d-flex justify-content-center flex-column align-items-center m-auto carousel-item-width">
                    <h4 className="mb-3 carousel-item-heading">
                      Services and Products
                    </h4>
                    <p className="home-paragraph">
                      We offer multiple testing facilities and services. Please
                      check the details of our services in our service section.
                    </p>
                  </div>
                  <Link to="/services" className="btn mt-4 carousel-item-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{ left: 0 }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{ right: 0 }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <About padding={props.padding} />
    </div>
  );
}

export default Home;
