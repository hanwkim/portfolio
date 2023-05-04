import "./TechStack.scss";

interface TechStackProps {
	image: string | undefined;
	name: string;
	imgAlt: string;
}

export default function TechStack({ image, name, imgAlt }: TechStackProps) {
	return (
		<div className="tech-stack">
			<img className="tech-stack__image" src={image} alt={imgAlt} />
			<span className="tech-stack__name">{name}</span>
		</div>
	);
}
