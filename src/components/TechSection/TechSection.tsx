import "./TechSection.scss";
import TechStack from "../TechStack/TechStack";
import techstacks from "../../data/techstacks.json";
import reactLogo from "../../assets/images/react-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import javascriptLogo from "../../assets/images/js-logo.png";
import sassLogo from "../../assets/images/sass-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import expressLogo from "../../assets/images/express-logo.png";
import typescriptLogo from "../../assets/images/typescript-logo.png";
import mysqlLogo from "../../assets/images/mysql-logo.png";
import knexLogo from "../../assets/images/knex-logo.png";

interface StackDetails {
    id: number;
    name: string;
    alt: string;
}

const imageArray: string[] = [
	reactLogo,
	htmlLogo,
	cssLogo,
	javascriptLogo,
	sassLogo,
	nodeLogo,
	expressLogo,
	typescriptLogo,
	mysqlLogo,
	knexLogo,
];

export default function TechSection() {
	return (
		<section className="tech">
			<div className="tech__container">
				<h2 className="tech__title">Tech Stacks</h2>
				<div className="tech__stack-container">
					{techstacks.map((techstack: StackDetails) => (
						<TechStack
							key={techstack.id}
							image={imageArray[techstack.id - 1]}
							name={techstack.name}
							imgAlt={techstack.alt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
