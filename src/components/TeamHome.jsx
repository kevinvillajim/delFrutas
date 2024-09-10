import propTypes from "prop-types";
import TeamCard from "./TeamCard";

export default function TeamHome({title, subTitle, members}) {
	return (
		<>
			<section className="py-10">
				<h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
				<h3 className="text-center text-xl font-semibold mb-12">{subTitle}</h3>
				<div className="flex flex-wrap justify-center gap-8">
					{members.map((member, index) => (
						<TeamCard
							key={index}
							img={member.img}
							name={member.name}
							position={member.position}
							socialMedia={member.socialMedia}
						/>
					))}
				</div>
			</section>
		</>
	);
}

TeamHome.propTypes = {
	members: propTypes.object.isRequired,
	title: propTypes.string.isRequired,
	subTitle: propTypes.string.isRequired,
};
