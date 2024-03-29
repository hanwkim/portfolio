import "./Projects.scss";
import Project from "../Project/Project";
import projectsData from "../../data/projects.json";
import {
	foodFightArr,
	inStockArr,
	fridgeToTableArr,
} from "../../data/image-data";

interface ProjectDetails {
	id: number;
	name: string;
	description: string;
	alt: string;
	tech: string[];
	link1?: string;
	link2?: string;
	link3?: string;
}

const imageArray = [foodFightArr, inStockArr, fridgeToTableArr];

export default function Projects() {
	return (
		<>
			<div className="projects__divider" id="projects"></div>
			<section className="projects">
				<div className="projects__container">
					<h2 className="projects__title">Projects</h2>
					<div className="projects__project-container">
						{projectsData.map((project: ProjectDetails) => (
							<Project
								key={project.id}
								name={project.name}
								images={imageArray[project.id - 1]}
								description={project.description}
								alt={project.alt}
								tech={project.tech}
								link1={project.link1}
								link2={project.link2}
								link3={project.link3}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
