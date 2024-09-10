import propTypes from "prop-types";

export default function Card2({img, title, text}) {
	return (
		<>
			<div className="bg-white dark:bg-card rounded-lg shadow-lg p-6 w-80 transition-transform transform hover:scale-105 border-b border-black">
				<div className="flex items-center justify-center mb-4">
					<img
						aria-hidden="true"
						alt="water-drop"
						src={img}
						className="w-12 h-12"
					/>
				</div>
				<h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
				<p className="text-muted-foreground">{text}</p>
			</div>
		</>
	);
}

Card2.propTypes = {
	img: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
};
