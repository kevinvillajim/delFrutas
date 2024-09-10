import propTypes from "prop-types";

export default function Text({ text }) {
  return (
    <>
      <div className="w-full flex align-center justify-center py-[2rem]">
        <h1 className="text-mdx text-[#3E3D3F] fontTitle">{text}</h1>
      </div>
    </>
  );
}

Text.propTypes = {
  text: propTypes.string,
};
