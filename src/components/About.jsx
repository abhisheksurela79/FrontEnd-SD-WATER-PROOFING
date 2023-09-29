import React from "react";
import "./css/about.css";
import base1 from "../static/DreamShaper_v5_water_proofing_0.jpg";
import base2 from "../static/DreamShaper_v5_The_residential_and_commercial_sector_0.jpg";
import base3 from "../static/DreamShaper_v5_5_stars_0.jpg";
import base4 from "../static/DreamShaper_v5_longroad_0.jpg";



function About(props) {
  return (
    <div id="about" style={{ padding: props.padding }}>
      <div
        className="box"
        style={{ marginTop: "6rem" }}
      >
        <img className="baseimage1" src={base1} alt="" draggable="false" />
        <div className="about-text-container">
          <h4 className="heading text-center">
            Welcome to{" "}
            <span className="sd-waterproofing">S.D Waterproofing</span>
          </h4>

          <p className="paragraph">
            Introducing S.D WATERPROOFING & CONSTRUCTION SOLUTIONS CO, your
            trusted partner in the industry for over 15 years. Our exceptional
            success rate in both the Residential and Commercial sectors speaks
            volumes about our expertise and dedication.
          </p>

          <p className="paragraph">
            Through relentless research and innovation, we have elevated our
            business to new heights, allowing us to confidently provide
            guarantees on our workmanship. Our outstanding track record is a
            testament to the satisfaction and happiness of our valued customers.
          </p>

          <p className="paragraph">
            When you choose S.D Waterproofing & CONSTRUCTION SOLUTIONS CO., you
            are selecting a business partner committed to excellence. We ensure
            the success of every project we undertake, delivering impeccable
            results that exceed expectations.
          </p>

          <p className="paragraph">
            Experience the difference of working with a company that prioritizes
            quality, reliability, and customer satisfaction. Choose S.D
            Waterproofing & CONSTRUCTION SOLUTIONS CO. for all your
            waterproofing and construction needs, and let us transform your
            vision into reality.
          </p>
        </div>
      </div>

      <div
        className="box"
        style={{ marginTop: "6rem" }}
      >
        <div className="about-text-container">
          <h4 className="heading">Vision Statement</h4>

          <p className="paragraph">
            S.D WATERPROOFING AND CONSTRUCTION SOLUTIONS CO. strives to become
            the foremost service provider in both residential and commercial
            sectors. Our ultimate goal is to accomplish this by delivering
            exceptional quality products and services that consistently surpass
            the expectations of our clients, while maintaining a competitive
            pricing strategy.
          </p>
        </div>

        <img className="baseimage1" src={base2} alt="" draggable="false" />
      </div>

      <div
        className="box"
        style={{ marginTop: "6rem" }}
      >
        <img className="baseimage3" src={base3} alt="" draggable="false" />
        <div className="about-text-container">
          <h4 className="heading">Mission Statement</h4>

          <p className="paragraph">
            In order to fulfill our aspiration of becoming the top service
            provider, we have embraced a clear-cut mission centered on exemplary
            leadership and exceptional customer service. Our organization is
            committed to fostering a culture of innovation and establishing
            robust support systems to effectively manage and adapt to change. We
            recognize the significance of maintaining high standards, delivering
            top-notch products and services, and consistently conducting
            industry research to stay ahead in the competitive landscape.
          </p>
        </div>
      </div>

      <div
        className="box"
        style={{ marginTop: "6rem", paddingBottom: "12rem" }}
      >
        <div className="about-text-container">
          <h4 className="heading">Values</h4>

          <p className="paragraph">
            The company firmly believes that by consistently treating customers
            with utmost respect and fulfilling their diverse needs, we can
            establish enduring relationships with them. This, in turn, will
            contribute to our long-term growth and success.
          </p>

          <p className="paragraph">
            To gain a competitive edge over rivals, we actively foster
            creativity, invention, and innovation. By embracing these qualities,
            we can stay ahead in the market and meet customer expectations in
            unique and exciting ways.
          </p>

          <p className="paragraph">
            Moreover, S.D Waterproofing upholds honesty, integrity, and strong
            business ethics as fundamental principles across all areas of
            operation. We believe that by incorporating these values into our
            daily practices, we build trust and maintain a solid reputation.
          </p>

          <p className="paragraph">
            Recognizing the vital role our employees play, we consider them a
            valuable asset to our business. Our aim is not only to generate
            wealth for the company but also to foster the growth and well-being
            of our employees. We invest in their development and provide
            opportunities for skills transfer, enabling them to feel empowered
            and motivated in their roles.
          </p>
        </div>

        <img className="baseimage3" src={base4} alt="" draggable="false" />
      </div>
    </div>
  );
}

export default About;
