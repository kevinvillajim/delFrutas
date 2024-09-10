import propTypes from "prop-types";

export default function Title({ title }) {
  return (
    <>
      <div className="w-full flex align-center justify-center py-[2rem] shadow-md">
        <h1 className="text-6xl font-bold text-[#3E3D3F] fontTitle">{title}</h1>
      </div>
    </>
  );
}

Title.propTypes = {
  title: propTypes.string,
};
