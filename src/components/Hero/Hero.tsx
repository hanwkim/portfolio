import "./Hero.scss";
import heroImage from "../../assets/images/hero-image.svg";

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero__container">
				<img
					className="hero__image"
					src={heroImage}
					alt="hands on laptop keyboard"
				></img>
				<section className="hero__text-container">
					<h1 className="hero__title">Hi, I'm Han.</h1>
					<p className="hero__text">
						I'm a full-stack engineer with a passion for creating
						cool stuff and learning new technologies.
					</p>
				</section>
			</div>
		</section>
	);
}
