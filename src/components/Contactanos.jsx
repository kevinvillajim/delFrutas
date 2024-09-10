import {useState} from "react";

export default function Contactanos() {
	const [switchForm, setSwitchForm] = useState(false);
	function switchFormHandler() {
		setSwitchForm(!switchForm);
	}
	return (
		<>
			<div className="bg-[#E6E6E6] p-[5rem] cont">
				<div>
					<h1>Contáctanos</h1>
					<div className="flex py-[2rem] px-[4rem] flex-col bg-[white] rounded-2xl contactos-container">
						<div className="flex py-[2rem] flex-row justify-center">
							<div className="flex gap-6 justify-center bg-[#E6E6E6] rounded-full w-[40%] buttons-container">
								<div>
									<a
										id="whatsapp-link"
										href="https://api.whatsapp.com/send?phone=593983583620&text=Buenas%20tardes, me contacto desde tu pagina web"
										target="_blank"
									>
										<div id="whatsapp-btn">
											<img src="/whatsapp.svg" />
										</div>
									</a>
								</div>
								<div>
									<a
										id="facebook-link"
										href="https://www.facebook.com/davidalejandro.guevaraverduga"
										target="_blank"
									>
										<div id="facebook-btn">
											<img src="/facebook.svg" />
										</div>
									</a>
								</div>
								<div>
									<a
										id="instagram-link"
										href="https://www.instagram.com/"
										target="_blank"
									>
										<div id="instagram-btn">
											<img src="/instagram.svg" />
										</div>
									</a>
								</div>
								<div>
									<a
										id="tiktok-link"
										href="https://www.instagram.com/"
										target="_blank"
									>
										<div id="tiktok-btn">
											<img src="/tiktok.svg" />
										</div>
									</a>
								</div>
								<div>
									<a id="email-link" onClick={switchFormHandler}>
										<div id="email-btn">
											<img src="/email" />
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className={`px-[3rem] ${switchForm ? "inline" : "hidden"}`}>
							<form>
								<div className="form-container">
									<div className="flex flex-col gap-3">
										<label htmlFor="nombre">Nombre Completo</label>
										<input
											className="border-2 w-[25rem] form-name"
											type="text"
											id="nombre"
											name="nombre"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="email">Email</label>
										<input
											className="border-2 w-[15rem] form-email"
											type="email"
											id="email"
											name="email"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="telefono">Whatsapp</label>
										<input
											className="border-2"
											type="phone"
											id="telefono"
											name="telefono"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="mensaje">Mensaje</label>
									<textarea
										id="mensaje"
										name="mensaje"
										className="h-[10rem] w-full border-2"
									></textarea>
								</div>
								<div className="flex flex-col gap-3 form-button">
									<input
										className="px-[4rem] py-[1rem] bg-black rounded-full text-[white]"
										type="submit"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
