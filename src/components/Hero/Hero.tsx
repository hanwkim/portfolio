import "./Hero.scss";

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__image-container">
					<div className="hero__image"></div>
				</div>
				<section className="hero__text-container">
					<h1 className="hero__title">Hi, I'm Han.</h1>
					<p className="hero__text">I'm a Full-Stack Engineer.</p>
				</section>
			</div>
		</section>
	);
}
