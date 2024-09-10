import propTypes from "prop-types";
import BusinessCard from "./BusinessCard";

export default function BusinessHome({title, text, businesses}) {
	return (
		<>
			<div className="bg-background p-8">
				<h2 className="text-center text-2xl font-bold text-primary">{title}</h2>
				<h3 className="text-center text-lg text-muted">{text}</h3>
				<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
					{businesses.map((business, index) => (
						<BusinessCard
							key={index}
							title={business.title}
							price={business.price}
							subtitle={business.subtitle}
							options={business.options}
							bTitle={business.bTitle}
							bLink={business.bLink}
						/>
					))}
				</div>
			</div>
		</>
	);
}

BusinessHome.propTypes = {
	businesses: propTypes.array.isRequired,
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
};
