import "./Contact.scss";
import ContactIcon from "../ContactIcon/ContactIcon";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import mailIcon from "../../assets/icons/mail.svg";
import computerImage from "../../assets/images/hero-image.svg";
import { useState } from "react";

interface ImageInterface {
	image: string;
}

export default function Contact() {
	const [buttonHover, setButtonHover] = useState<boolean>(false)

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
						Feel free to reach out to me using the links below. I am
						always happy to chat about coding, videogames, food, and
						music.
					</p>
				</div>
				<div className="contact__links">
					<a
						className="contact__link"
						target="_blank"
						rel="noreferrer"
						href="https://gmail.com"
						onMouseEnter={() => setButtonHover(true)}
						onMouseLeave={() => setButtonHover(false)}
					>
						<span className="contact__link-text">Email</span>
						<img
							className={buttonHover ? "contact__link-image contact__link-image--hover" : "contact__link-image"}
							src={mailIcon}
							alt="Email icon"
						></img>
					</a>
					<a
						className="contact__link"
						target="_blank"
						rel="noreferrer"
						href="https://linkedin.com"
						onMouseEnter={() => setButtonHover(true)}
						onMouseLeave={() => setButtonHover(false)}
					>
						<span className="contact__link-text">LinkedIn</span>
						<img
							className="contact__link-image"
							src={linkedinIcon}
							alt="LinkedIn Icon"
						></img>
					</a>
					<a
						className="contact__link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com"
					>
						<span className="contact__link-text">Github</span>
						<img
							className="contact__link-image"
							src={githubIcon}
							alt="github icon"
						></img>
					</a>
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
