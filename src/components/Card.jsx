import Button from "./Button";
import propTypes from "prop-types";

export default function Card({ title, text, button, img }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white w-96 h-96">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src={img}
              alt="title"
            />
            <h1 className="text-4xl text-black font-bold">{title}</h1>
            <p className="text-black">{text}</p>
            <Button
              link={button.link}
              title={button.text}
              text={button.text}
              dark={button.dark}
              onClick={button.onClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  button: propTypes.object,
  img: propTypes.string,
};
