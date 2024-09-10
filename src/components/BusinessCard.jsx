import propTypes from "prop-types";
import Button from "./Button";

export default function BusinessCard({
	title,
	price,
	subtitle,
	options,
	bTitle,
	bLink,
}) {
	return (
		<>
			<div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
				<h4 className="text-xl font-semibold">{title}</h4>
				<p className="text-2xl font-bold">{price}</p>
				<p className="text-sm text-muted-foreground">{subtitle}</p>
				<ul className="my-4 space-y-2">
					{options.map((option, index) => (
						<li className="flex items-center" key={index}>
							<span className="text-accent">✔️</span> {option}
						</li>
					))}
				</ul>
				<Button link={bLink} title={bTitle} text={bTitle} />
			</div>
		</>
	);
}

BusinessCard.propTypes = {
	title: propTypes.string.isRequired,
	price: propTypes.string.isRequired,
	subtitle: propTypes.string.isRequired,
	options: propTypes.array.isRequired,
	bTitle: propTypes.string.isRequired,
	bLink: propTypes.string.isRequired,
};
