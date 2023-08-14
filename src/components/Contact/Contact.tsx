import "./Contact.scss";
import ContactLink from "../ContactLink/ContactLink";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import mailIcon from "../../assets/icons/mail.svg";
import computerImage from "../../assets/images/contact-image.svg";

interface LinkInterface {
	id: number;
	icon: string;
	text: string;
	url: string;
	altText: string;
}

const linkArray = [
	{
		id: 1,
		icon: mailIcon,
		text: "Email",
		url: "mailto:hanwkim88@gmail.com",
		altText: "email icon",
	},
	{
		id: 2,
		icon: linkedinIcon,
		text: "LinkedIn",
		url: "https://www.linkedin.com/in/han-kim/",
		altText: "linkedin icon",
	},
	{
		id: 3,
		icon: githubIcon,
		text: "GitHub",
		url: "https://github.com/hanwkim",
		altText: "github icon",
	},
];

export default function Contact() {

	return (
		<>
			<div className="contact__divider" id="contact"></div>
			<section className="contact">
				<div className="contact__container">
					<h2 className="contact__title">Get In Touch</h2>
					<div className="contact__image-container">
						<img
							className="contact__image"
							src={computerImage}
							alt="hands typing on laptop"
						></img>
					</div>
					<div className="contact__text-container">
						<p className="contact__text">
							Feel free to reach out to me using the links below.
							I am always happy to chat about coding, videogames,
							food, and music.
						</p>
					</div>
					<div className="contact__links">
						{linkArray.map((link: LinkInterface) => (
							<ContactLink
								key={link.id}
								icon={link.icon}
								url={link.url}
								text={link.text}
								altText={link.altText}
							/>
						))}
					</div>
					<div className="contact__text-container">
						<p className="contact__text">
							Thanks for checking out my site!
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
