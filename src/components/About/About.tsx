import "./About.scss";
import TechSection from "../TechSection/TechSection";

export default function About() {
	return (
		<section className="about" id="about">
			<div className="about__text-container">
				<h2 className="about__title">About Me</h2>
				<p className="about__text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolor hic, assumenda accusantium animi iure culpa a rem
					minima ipsa beatae nesciunt dolorem in laboriosam ex quaerat
					rerum repudiandae cupiditate iste!
				</p>
			</div>
			<TechSection />
		</section>
	);
}
