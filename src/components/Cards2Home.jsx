import propTypes from "prop-types";
import Card2 from "./Card2";

export default function Cards2Home({cards}) {
	return (
		<>
			<div className="flex flex-wrap justify-center p-6 space-x-4 space-y-4">
				{cards.map((card, index) => (
					<Card2
						key={index}
						img={card.img}
						title={card.title}
						text={card.text}
					/>
				))}
			</div>
		</>
	);
}

Cards2Home.propTypes = {
	cards: propTypes.array.isRequired,
};
