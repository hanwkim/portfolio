import "./Projects.scss";
import Project from "../Project/Project";
import projects from "../../data/projects.json";
import fridgeToTable from "../../assets/images/fridge-to-table.PNG";
import foodFight from "../../assets/images/food-fight.PNG";

interface ProjectDetails {
	id: number;
	name: string;
	description: string;
	alt: string;
	tech: string[];
	link1: string;
	link2?: string;
	link3?: string;
}

const imageArray = [foodFight, fridgeToTable];

export default function Projects() {

    console.log(projects[0].tech)
	return (
		<section className="projects">
			<h2 className="projects__title">Projects</h2>
			<div className="projects__container">
				{projects.map((project: ProjectDetails) => (
					<Project
						key={project.id}
						name={project.name}
						image={imageArray[project.id - 1]}
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
