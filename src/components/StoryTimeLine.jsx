import propTypes from "prop-types";
import { useState } from "react";
import BubleStory from "./BubleStory";

export default function SotryTimeLine({ storiesData }) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const selectedStory = storiesData.find(
    (story) => story.year === selectedYear
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="years-container flex space-x-4">
          {storiesData.map((story) => (
            <button
              key={story.year}
              className={`year-button ${
                selectedYear === story.year ? "text-bold" : ""
              }`}
              onClick={() => handleYearClick(story.year)}
            >
              <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                  style={{ backgroundImage: `url(${story.img})` }}
                ></div>
                <p className="text-[#fff] text-[13px] font-normal leading-normal">
                  {story.year}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedStory && (
          <BubleStory
            year={selectedStory.year}
            title={selectedStory.title}
            description={selectedStory.description}
          />
        )}
      </div>
    </>
  );
}

SotryTimeLine.propTypes = {
  storiesData: propTypes.array,
};
