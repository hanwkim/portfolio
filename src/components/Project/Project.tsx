import "./Project.scss";

interface ProjectProps {
	name: string;
	image: string | undefined;
	description: string;
	alt: string;
	tech: string[];
	link1: string;
	link2?: string;
	link3?: string;
}

export default function Project({
	name,
	image,
	description,
	alt,
	tech,
	link1,
	link2,
	link3,
}: ProjectProps) {
	return (
		<section className="project">
			<div className="project__container">
				<h3 className="project__title">{name}</h3>
				<img src={image} alt={alt} className="project__image"></img>
				<p className="project__description">{description}</p>
				<div className="project__links">
					{link2 ? (
						<a href={link1}>Github - Client</a>
					) : (
						<a href={link1}>Github</a>
					)}
					{link2 && <a href={link2}>Github - Server</a>}
					{link3 && <a href={link3}>Demo</a>}
				</div>
				<div className="project__techstacks">
					{tech.map((stack) => (
						<span className="project__techstack">{stack}</span>
					))}
				</div>
			</div>
		</section>
	);
}
