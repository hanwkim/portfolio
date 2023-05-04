import './Projects.scss';
import Project from '../Project/Project';

export default function Projects() {
    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
                <Project />
            </div>
        </section>
    )
}