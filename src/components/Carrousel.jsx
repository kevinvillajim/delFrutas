import { useState } from "react";
import Button from "./Button";
import propTypes from "prop-types";

export default function Carrousel({ carrousel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carrousel.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carrousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = carrousel[currentIndex];

  return (
    <section
      className={`h-screen ${
        currentItem.video
          ? "bg-black"
          : "bg-gradient-to-r from-[#51205B] via-[#B32D32] to-[#51205B] text-white"
      } pb-[6rem] pt-[9.8rem] px-[4rem] relative flex HomeBannerContainer`}
    >
      <div className="container flex flex-col md:flex-row justify-center items-center">
        {currentItem.video ? (
          <video
            src={currentItem.fondoVideo}
            autoPlay
            loop
            className="videoBackground"
          ></video>
        ) : (
          <>
            <div className="px-[1.2rem] md:w-1/2 text-center md:text-left textHomeBannerContainer">
              <h1 className="text-6xl font-bold mb-4 titleHomeBanner">
                {currentItem.title}
              </h1>
              <p className="mb-8">{currentItem.text}</p>
              <div className="w-[100%] flex gap-[3rem] btnHomeBanner">
                <Button
                  link={currentItem.link}
                  title={currentItem.textbtn.toLowerCase()}
                  text={currentItem.textbtn}
                />
              </div>
            </div>
            <div className="relative px-[2.5rem] md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="absolute inset-0 z-0 flex justify-center items-center left-[-1rem] md:left-[-5rem] sm:left-0">
                <img
                  src="/bg.png"
                  alt="Background"
                  className="w-full object-cover img_transparent img-bg-carrousel"
                />
              </div>
              <img
                src={currentItem.img}
                alt="Product Image"
                className={`relative z-1 max-w-[15rem] md:max-w-full ${
                  currentItem.position == "down"
                    ? "img_transparent_down"
                    : "img_transparent_right"
                }`}
              />
            </div>
          </>
        )}
      </div>
      <span
        className="text-[40px] material-symbols-outlined absolute left-0 top-1/2 transform -translate-y-1/2 p-1 text-white text-center cursor-pointer butHov mx-2 z-10"
        onClick={handlePrevClick}
        role="button"
        aria-label="Previous Slide"
      >
        chevron_left
      </span>
      <span
        className="text-[40px] material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 p-1 text-white text-center cursor-pointer butHov mx-2 z-10"
        onClick={handleNextClick}
        role="button"
        aria-label="Next Slide"
      >
        chevron_right
      </span>
    </section>
  );
}

Carrousel.propTypes = {
  carrousel: propTypes.array,
};
