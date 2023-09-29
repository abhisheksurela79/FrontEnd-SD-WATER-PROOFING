import React from "react";
import "./css/services.css";
import base from "../static/Default_raindrops_on_glass_with_blurred_traffic_dark_0.jpg";
import thermal_leak_test from "../static/DreamShaper_v5_Thermal_Imaging_Leak_Test_0.jpg";
import ultrasonic_pipe_leak_test from "../static/DreamShaper_v5_Ultrasonic_Pipe_Leak_Test_0.jpg";
import special_color_leak_test from "../static/DreamShaper_v5_Special_Color_Leak_Test_water_proofing_0.jpg";
import underground_cavity_detection from "../static/DreamShaper_v5_Underground_Cavity_Detection_waterproofing_0.jpg";
import pu_grouting from "../static/DreamShaper_v5_PU_Grouting_waterproofing_0.jpg";
import epoxy_grouting_strengthening_concrete from "../static/DreamShaper_v5_Epoxy_Grouting_for_Strengthening_Concrete_wate_0.jpg";
import soil_stabilization from "../static/DreamShaper_v5_Soil_Stabilization_Waterproofing_0.jpg";
import basement_waterproofing from "../static/DreamShaper_v5_basement_waterproofing_0.jpg";
import construction_expansion_joint from "../static/DreamShaper_v5_Construction_Expansion_Joint_Waterproofing_0.jpg";
import machine_foundation_waterproofing from "../static/DreamShaper_v5_Machine_Foundation_Waterproofing_0.jpg";
import lift_pit from "../static/DreamShaper_v5_Lift_Pit_Water_proofing_0.jpg";
import swimming_pool from "../static/DreamShaper_v5_Swimming_Pool_Water_proofing_0.jpg";
import tunnels_water_proofing from "../static/DreamShaper_v5_Tunnels_Waterproofing_0.jpg";
import dams_water_proofing from "../static/DreamShaper_v5_Dams_Waterproofing_0.jpg";
import bridges_strengthening from "../static/DreamShaper_v5_Bridges_Strengthening_0.jpg";

function Services(props) {
  return (
    <div id="services-page">
      <div className="base-image-container-services">
        <img
          src={base}
          alt=""
          className="base-image-services"
          draggable="false"
        />
        <h4 className="inner-container-services">Products & Services</h4>
      </div>

      <p className="paragraph-services">
        Welcome to S.D Water Proofing, your trusted partner for all your
        waterproofing needs. We offer a comprehensive range of products and
        services designed to protect your structures from water damage. Our team
        of experts utilizes advanced techniques and state-of-the-art equipment
        to deliver effective and long-lasting solutions. Explore our wide array
        of services below
      </p>


      <p className="paragraph-services" style={{ padding: props.padding }}>
        At S.D Water Proofing, we are committed to delivering unmatched quality,
        durability, and customer satisfaction. Our team of experienced
        professionals is dedicated to providing tailored waterproofing solutions
        to meet your specific needs. Experience the future of waterproofing
        today. Contact us to discuss your requirements and find the ideal
        solution for your structures.
      </p>

      <div className="services-content" style={{ padding: props.padding }}>
        <div className="services-section mt-3 pb-5">
          <h5 className="mb-5">Testing</h5>

          <div className="d-flex gap-3 flex-wrap justify-content-start">
            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Thermal Imaging Leak Test
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={thermal_leak_test}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  We employ thermal imaging technology to detect and locate
                  hidden leaks, ensuring early detection and prevention of water
                  damage.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Ultrasonic Pipe Leak Test
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={ultrasonic_pipe_leak_test}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Our ultrasonic testing method accurately detects leaks in
                  pipes, allowing for swift repairs and minimizing water loss.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Special Color Leak Test
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={special_color_leak_test}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Using a specialized dye, we trace water leaks to their source,
                  providing precise identification and targeted repairs.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Underground Cavity Detection
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={underground_cavity_detection}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Through state-of-the-art equipment, we locate hidden
                  underground cavities, preventing potential structural hazards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-section mt-3 mb-5">
          <h5 className="mb-5">Specialized Injection Grouting</h5>

          <div className="d-flex gap-3 flex-wrap justify-content-start">
            <div className="services-section-items">
              <p className="services-section-content-tittle">PU Grouting</p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={pu_grouting}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Our polyurethane grouting technique effectively seals cracks
                  and voids, preventing water seepage and strengthening the
                  structure
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Epoxy Grouting for Strengthening Concrete
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={epoxy_grouting_strengthening_concrete}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  By injecting epoxy grout, we enhance the strength and
                  durability of concrete, making it resistant to water
                  penetration and structural deterioration.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Soil Stabilization
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={soil_stabilization}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  We stabilize loose or expansive soils using specialized
                  grouting materials, ensuring the stability and integrity of
                  your construction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-section mt-3" style={{paddingBottom: "12rem"}}>
          <h5 className="mb-5">Water-Proofing</h5>

          <div className="d-flex gap-3 flex-wrap justify-content-start">
            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Basement Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={basement_waterproofing}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Protect your basement from water intrusion and dampness,
                  creating a dry and habitable space.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Construction & Expansion Joint Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={construction_expansion_joint}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Our solutions safeguard construction joints and expansion
                  joints from water penetration, preserving the integrity of the
                  structure.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Machine Foundation Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={machine_foundation_waterproofing}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  We provide effective waterproofing solutions for machine
                  foundations, shielding them from water damage and potential
                  structural issues.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Lift Pit Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={lift_pit}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Prevent water ingress in lift pits, ensuring the safety and
                  functionality of elevator systems.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Swimming Pool Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={swimming_pool}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Our expertise in pool waterproofing ensures a watertight
                  structure, allowing you to enjoy a leak-free and durable
                  swimming pool.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Tunnels Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={tunnels_water_proofing}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  We employ advanced techniques to waterproof tunnels,
                  mitigating water infiltration and preserving the structural
                  integrity.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Dams Waterproofing
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={dams_water_proofing}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Protect dams and reservoirs from water seepage, ensuring their
                  stability and preventing loss of valuable resources.
                </p>
              </div>
            </div>

            <div className="services-section-items">
              <p className="services-section-content-tittle">
                Bridges Strengthening
              </p>
              <div className="services-section-content">
                <img
                  className="services-section-content-image"
                  src={bridges_strengthening}
                  alt=""
                  draggable="false"
                />
                <p className="services-section-content-paragraph">
                  Our solutions reinforce bridges, making them resistant to
                  water damage and enhancing their lifespan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
