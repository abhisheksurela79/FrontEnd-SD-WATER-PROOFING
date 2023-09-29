import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import "./css/gallery.css";




function Gallery() {
  // State variable to track thumbnail image loading status
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [expandedContentUrl, setExpandedContentUrl] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetchPortfolio();
  }, []);
  
  const fetchPortfolio = () => {
    fetch("http://api-sd-waterproofing.abhisheksurela.in/portfolio/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPortfolioData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle thumbnail image load
  const handleThumbnailLoad = () => {
    setThumbnailLoaded(true);
  };

  const thumbnailSmallImageStyle = {
    filter: "blur(40px)",
    transition: "filter 0.5s ease-out", // Adjust the transition duration as desired
    WebkitFilter: "blur(20px)",
  };

  const galleryItems = portfolioData.map((value, index) => {
    const renderThumbnailItems = () => {
      return (
        <div key={index}>
          <div className="small-thumbnail-wrapper">
            {thumbnailLoaded ? (
              <img
                src={value.file.thumbnail}
                alt="Thumbnail"
                draggable="false"
                onClick={() => handleOpenModel(index)}
              />
            ) : (
              <img
                className="animated-background"
                style={thumbnailSmallImageStyle}
                src={value.file.thumbnail_small}
                alt="Thumbnail"
                draggable="false"
                onLoad={handleThumbnailLoad}
              />
            )}
          </div>
        </div>
      );
    };
    return renderThumbnailItems();
  });

  const handleOpenModel = (index) => {
    setSlideNumber(index);
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };

  const ExpandedContent = () => {
    if (openModel) {

      const item = portfolioData[slideNumber];

      if (item.type_of_file === "image") {
        return (
          <div className="slider-wrapper slider-open">
            <div
              className="close-expanded-content-wrapper"
              onClick={handleCloseModel}
            >
              <AiOutlineClose className="close-expanded-content" />
            </div>

            <div
              className="forward-expanded-content-wrapper"
              onClick={() => changeExpandedContent("forward")}
            >
              <HiMiniArrowLongRight className="forward-expanded-content" />
            </div>

            <div
              className="previous-expanded-content-wrapper"
              onClick={() => changeExpandedContent("previous")}
              // onKeyPress={changeExpandedContent("previous")}
            >
              <HiMiniArrowLongLeft className="previous-expanded-content" />
            </div>

            <img
              className="expended-image"
              src={
                expandedContentUrl === "" ? item.file.url : setExpandedContentUrl
              }
              alt="Thumbnail"
              draggable="false"
              loading="eager"
            />
            <div className="content-preview-row">{prevCaptionWrapper()}</div>
          </div>
        );
      }
    }
    return null;
  };

  const changeExpandedContent = (direction) => {
    if (direction === "forward") {
      slideNumber === portfolioData.length - 1
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    } else if (direction === "previous") {
      slideNumber === 0
        ? setSlideNumber(portfolioData.length - 1)
        : setSlideNumber(slideNumber - 1);
    }
  };

  const prevCaptionWrapper = () => {
    return (
      <>
        <h6>{portfolioData[slideNumber].name.heading}</h6>
        <p>{portfolioData[slideNumber].name.caption}</p>
      </>
    );
  };



  return (
    
    <div style={{ padding: "3rem 3% 2rem 3%" }}>
      {/* {console.log(portfolioData)} */}

      <ExpandedContent />

      <div id="gallery-container">{galleryItems}</div>
    </div>
  );
}

export default Gallery;
