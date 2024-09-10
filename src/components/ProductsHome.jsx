import propTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function ProductsHome({title, text, products}) {
	return (
		<>
			<section className="py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">{title}</h2>
					<h3 className="text-2xl font-semibold text-primary">{text}</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product, index) => (
						<ProductCard
							key={index}
							img={product.img}
							title={product.title}
							text={product.text}
						/>
					))}
				</div>
			</section>
		</>
	);
}

ProductsHome.propTypes = {
	products: propTypes.array.isRequired,
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
};
