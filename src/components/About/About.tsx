import "./About.scss";
import TechSection from "../TechSection/TechSection";

export default function About() {
	return (
		<section className="about" id="about">
			<div className="about__text-container">
				<h2 className="about__title">About Me</h2>
				<p className="about__text">
					My name is Han Kim, and I'm a recent BrainStation graduate with
					backgrounds in music and finance. From a young age, I've had
					a love for being creative, working with numbers, and solving
					problems. Coding provides a way to do all of those things
					and more, and I'm excited to continue learning new tech,
					improving my coding skills, and building apps that make an
					impact.
				</p>
			</div>
			<TechSection />
		</section>
	);
}
