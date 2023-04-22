import './Home.scss';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Hero from '../../components/Hero/Hero';

export default function Home() {
    return (
        <main className="home">
            <Header />
            <Menu />
            <Hero />
        </main>
    )
}