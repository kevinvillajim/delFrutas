import "./App.css";
import Header from "./components/Header.jsx";
import Carrousel from "./components/Carrousel.jsx";

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
			</div>
		</>
	);
}

export default App;
