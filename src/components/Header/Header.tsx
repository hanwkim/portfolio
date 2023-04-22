import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<nav className="header__links">
				<a className="header__link" href="">
					Home
				</a>
				<a className="header__link" href="">
					About
				</a>
				<a className="header__link" href="">
					Projects
				</a>
				<a className="header__link" href="">
					Contact
				</a>
			</nav>
		</header>
	);
}
