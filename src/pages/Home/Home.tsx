import './Home.scss';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

export default function Home() {
    return (
        <main className="home">
            <Header />
            <Menu />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}