import "./Projects.scss";
import Project from "../Project/Project";
import projectsData from "../../data/projects.json";
import fridgeToTable from "../../assets/images/fridge-to-table.PNG";
import foodFight from "../../assets/images/food-fight.PNG";
import inStock from "../../assets/images/instock.PNG";
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
		<section className="projects" id="projects">
			<h2 className="projects__title">Projects</h2>
			<div className="projects__container">
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
		</section>
	);
}
