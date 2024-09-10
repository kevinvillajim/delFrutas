import "./App.css";
import Header from "./components/Header.jsx";
import Carrousel from "./components/Carrousel.jsx";
import CardsHome from "./components/CardsHome.jsx";
import BannerS from "./components/BannerS.jsx";
import Title from "./components/Title.jsx";
import Text from "./components/Text.jsx";
import Cards2Home from "./components/Cards2Home.jsx";
import NumberTextHome from "./components/NumberTextHome.jsx";
import ProductsHome from "./components/ProductsHome.jsx";
import BusinessHome from "./components/BusinessHome.jsx";
import TeamHome from "./components/TeamHome.jsx";
import Footer from "./components/Footer.jsx";
import Contactanos from "./components/Contactanos.jsx";

function App() {
	return (
		<>
			<div className="bg-black w-screen h-screen">
				<Header />
				<Carrousel
					carrousel={[
						{
							title: "TÉ NATURAL DE PANELA",
							text: "Disfruta de un té natural de panela, con un sabor único y delicioso, que te hará sentir en casa. Bebelo frio o caliente.",
							link: "/productos/pantallas-interactivas",
							textbtn: "Aprende más",
							img: "/teVaso.png",
							position: "down",
						},
						{
							title: "CONOCE LOS BENEFICIOS DE LA PANELA",
							text: "Descubre todas las virtudes y beneficios que puede dar la panela a tu vida, vive mas sano y por más tiempo.",
							link: "/nosotros",
							textbtn: "Conócenos",
							img: "/panela.png",
							position: "right",
						},
						{
							title: "PROCESO DE FABRICACIÓN",
							text: "Conoce como Té Del Frutas llega a tu mesa, desde la selección de los ingredientes y la producción hasta el empaque y distribución.",
							link: "/productos/seguridad",
							textbtn: "Aprende más",
							img: "/produccion.png",
							position: "right",
						},
					]}
				/>
				<CardsHome />
				<div>
					<Title title="TÉ DE PANELA" />
					<Text text="Disfruta de un té natural de panela, con un sabor único y delicioso, que te hará sentir en casa. Bebelo frio o caliente." />
					<BannerS img="/iceBanner.jpg" height="30rem" fixed={true} />
				</div>
				<Cards2Home
					cards={[
						{
							img: "/teVaso.png",
							title: "Quality Water",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi Ratione Deleniti Tenetur? Enim Illum Ex Eaque Ad.",
						},
						{
							img: "/teVaso.png",
							title: "Quality Water",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi Ratione Deleniti Tenetur? Enim Illum Ex Eaque Ad.",
						},
						{
							img: "/teVaso.png",
							title: "Quality Water",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi Ratione Deleniti Tenetur? Enim Illum Ex Eaque Ad.",
						},
						{
							img: "/teVaso.png",
							title: "Quality Water",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi Ratione Deleniti Tenetur? Enim Illum Ex Eaque Ad.",
						},
					]}
				/>
				<NumberTextHome
					data={[
						{
							number: "+20",
							text: "Pryectos Completados",
							icon: "/verified.svg",
						},
						{
							number: "+20",
							text: "Pryectos Completados",
							icon: "/verified.svg",
						},
						{
							number: "+20",
							text: "Pryectos Completados",
							icon: "/verified.svg",
						},
						{
							number: "+20",
							text: "Pryectos Completados",
							icon: "/verified.svg",
						},
					]}
				/>
				<ProductsHome
					title="Que ofrecemos"
					text="Nuestros productos"
					products={[
						{
							img: "https://placehold.co/600x400?text=Bottled+Tea",
							title: "Té enmbotellado",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi.",
						},
						{
							img: "https://placehold.co/600x400?text=Instant+Tea",
							title: "Té en polvo instantáneo",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi.",
						},
						{
							img: "https://placehold.co/600x400?text=Bottled+Tea",
							title: "Té enmbotellado",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi.",
						},
						{
							img: "https://placehold.co/600x400?text=Instant+Tea",
							title: "Té en polvo instantáneo",
							text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Sequi Modi.",
						},
					]}
				/>
				<BusinessHome
					title="Escoge tu plan"
					text="Plan de costos"
					businesses={[
						{
							title: "PERSONAL",
							price: "$50",
							subtitle: "PER MONTH",
							bTitle: "Order Now",
							bLink: "#",
							options: [
								"Bottled Water Size",
								"Delivery Fee",
								"Water Cooler",
								"Water Filtration",
								"Bottle Refill",
							],
						},
						{
							title: "PERSONAL",
							price: "$50",
							subtitle: "PER MONTH",
							bTitle: "Order Now",
							bLink: "#",
							options: [
								"Bottled Water Size",
								"Delivery Fee",
								"Water Cooler",
								"Water Filtration",
								"Bottle Refill",
							],
						},
						{
							title: "PERSONAL",
							price: "$50",
							subtitle: "PER MONTH",
							bTitle: "Order Now",
							bLink: "#",
							options: [
								"Bottled Water Size",
								"Delivery Fee",
								"Water Cooler",
								"Water Filtration",
								"Bottle Refill",
							],
						},
					]}
				/>
				<TeamHome
					title="Conoce Nuestro Equipo"
					subTitle="Our Team"
					members={[
						{
							name: "Janeth Jimenez",
							position: "Vendedor",
							img: "https://placehold.co/300x300",
							socialMedia: [
								{
									icon: "/facebook.svg",
									link: "https://www.facebook.com/kevin.villacreses.5/",
								},
								{
									icon: "/linkedIn.svg",
									link: "https://www.linkedin.com/in/kevin-villacreses-1851a7157/",
								},
							],
						},
						{
							name: "Kevin Villacreses",
							position: "Vendedor",
							img: "https://placehold.co/300x300",
							socialMedia: [
								{
									icon: "/facebook.svg",
									link: "https://www.facebook.com/kevin.villacreses.5/",
								},
								{
									icon: "/linkedIn.svg",
									link: "https://www.linkedin.com/in/kevin-villacreses-1851a7157/",
								},
							],
						},
					]}
				/>
				<Contactanos />
				<Footer />
			</div>
		</>
	);
}

export default App;
