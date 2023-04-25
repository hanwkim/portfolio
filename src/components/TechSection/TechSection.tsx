import './TechSection.scss';
import TechStack from '../TechStack/TechStack';

export default function TechSection() {
    return (
        <section className="tech">
            <h2 className="tech__title">Tech Stacks</h2>
            <div className="tech__container">
                <TechStack />
            </div>
        </section>
    )
}