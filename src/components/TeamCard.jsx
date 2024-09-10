import propTypes from "prop-types";

export default function TeamCard({img, name, position, socialMedia}) {
	return (
		<>
			<div className="max-w-xs text-center">
				<img className="rounded-lg" src={img} alt={name} />
				<h4 className="mt-4 text-lg font-semibold">{name}</h4>
				<p className="text-muted-foreground">{position}</p>
				<div className="flex justify-center mt-2">
					{socialMedia.map((social, index) => (
						<a key={index} href={social.link} target="_blank" className="mx-2">
							<img src={social.icon} />
						</a>
					))}
				</div>
			</div>
		</>
	);
}

TeamCard.propTypes = {
	img: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	position: propTypes.string.isRequired,
	socialMedia: propTypes.object.isRequired,
};
