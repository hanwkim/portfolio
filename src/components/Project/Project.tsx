import "./Project.scss";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface ProjectProps {
	name: string;
	images: string[];
	description: string;
	alt: string;
	tech: string[];
	link1?: string;
	link2?: string;
	link3?: string;
}

export default function Project({
	name,
	images,
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
				<div className="project__image-container">
					<Carousel data-bs-theme="dark" interval={null}>
						{images.map(image => (
							<Carousel.Item>
								<div className="project__image-holder">
								<Image className="project__image carousel-item d-block" src={image} alt={alt} fluid />
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				<p className="project__description">{description}</p>
				<div className="project__links">
					{link1 && <a href={link1}>Github</a>}
					{link2 && <a href={link2}>Github</a>}
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
