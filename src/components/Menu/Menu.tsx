import "./Menu.scss";
import MenuModal from "../MenuModal/MenuModal";
import menuIcon from "../../assets/icons/menu.svg";
import { useState } from "react";

export default function Menu() {
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	return (
		<nav className="menu">
			<img
				className="menu__icon"
				alt="hands typing on laptop"
				src={menuIcon}
				onClick={() => setIsMenuClicked(!isMenuClicked)}
			></img>
			{isMenuClicked && <MenuModal />}
		</nav>
	);
}
