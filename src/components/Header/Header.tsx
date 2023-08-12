import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<nav className="header__links">
					<a className="header__link" href="#hero">
						Home
					</a>
					<a className="header__link" href="#about">
						About
					</a>
					<a className="header__link" href="#projects">
						Projects
					</a>
					<a className="header__link" href="#contact">
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
