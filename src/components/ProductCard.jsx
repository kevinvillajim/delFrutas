import propTypes from "prop-types";

export default function ProductCard({img, title, text}) {
	return (
		<>
			<div className="bg-card rounded-lg overflow-hidden shadow-lg">
				<img
					className="w-full h-48 object-cover"
					src={img}
					alt="Bottled Water"
				/>
				<div className="p-4">
					<h4 className="text-xl font-bold">{title}</h4>
					<p className="text-muted-foreground">{text}</p>
				</div>
			</div>
		</>
	);
}

ProductCard.propTypes = {
	img: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
};
