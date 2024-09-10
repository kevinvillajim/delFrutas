import propTypes from "prop-types";

export default function NumberText({number, text, icon}) {
	return (
		<>
			<div className="flex flex-col items-center">
				<img aria-hidden="true" alt="projects-done" src={icon} />
				<h2 className="text-4xl font-bold">{number}</h2>
				<p className="text-muted-foreground">{text}</p>
			</div>
		</>
	);
}

NumberText.propTypes = {
	number: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	icon: propTypes.string.isRequired,
};
