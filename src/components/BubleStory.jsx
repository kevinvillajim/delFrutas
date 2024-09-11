import propTypes from "prop-types";

export default function BubleStory({ year, title, description }) {
  return (
    <>
      <div key={year}>
        <h1 className="text-[#fff] fontTitle">{title}</h1>
        <p className="text-[#fff] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {description}
        </p>
      </div>
    </>
  );
}

BubleStory.propTypes = {
  img: propTypes.string,
  year: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};
