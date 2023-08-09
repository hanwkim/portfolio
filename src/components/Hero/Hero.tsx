import "./Hero.scss";
import heroImage from "../../assets/images/avatar.png";

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__image-container">
					{/* <img
						className="hero__image"
						src={heroImage}
						alt="hands on laptop keyboard"
					></img> */}
				</div>
				<section className="hero__text-container">
					<h1 className="hero__title">Hi, I'm Han.</h1>
					<p className="hero__text">
						I'm a full-stack engineer with a passion for creating
						responsive web applications.
					</p>
				</section>
			</div>
		</section>
	);
}
