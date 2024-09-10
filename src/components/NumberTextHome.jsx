import propTypes from "prop-types";
import NumberText from "./NumberText";

export default function NumberTextHome({data}) {
	return (
		<>
			<div className="bg-black text-white py-10">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
					{data.map((item, index) => (
						<NumberText
							key={index}
							number={item.number}
							text={item.text}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
		</>
	);
}

NumberTextHome.propTypes = {
	data: propTypes.array.isRequired,
};
