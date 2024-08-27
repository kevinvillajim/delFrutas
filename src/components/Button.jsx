export default function Button({link, title, text, dark, onClick}) {
	return (
		<>
			<div onClick={onClick}>
				<a
					href={link}
					title={title}
					className={dark === true ? "button-glow-dark" : "button-glow"}
				>
					{text}
				</a>
			</div>
		</>
	);
}
