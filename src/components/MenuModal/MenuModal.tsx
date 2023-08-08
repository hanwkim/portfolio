import "./MenuModal.scss";
import closeIcon from "../../assets/icons/close.svg";
import { Dispatch } from "react";
import { motion } from "framer-motion";

interface ModalProps {
	setIsMenuClicked: Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuModal({ setIsMenuClicked }: ModalProps) {
	return (
		<>
			<motion.nav
				className="menu-modal"
				initial={{ x: 500 }}
				animate={{ x: 0 }}
				transition={{ ease: "easeInOut", duration: 0.25 }}
			>
				<div className="menu-modal__icon">
					<img
						className="menu-modal__close"
						src={closeIcon}
						alt="close icon"
						onClick={() => setIsMenuClicked(false)}
					></img>
				</div>

				<section className="menu-modal__links">
					<a
						className="menu-modal__link"
						href="#hero"
						onClick={() => setIsMenuClicked(false)}
					>
						Home
					</a>
					<a
						className="menu-modal__link"
						href="#about"
						onClick={() => setIsMenuClicked(false)}
					>
						About
					</a>
					<a
						className="menu-modal__link"
						href="#projects"
						onClick={() => setIsMenuClicked(false)}
					>
						Projects
					</a>
					<a
						className="menu-modal__link"
						href="#contact"
						onClick={() => setIsMenuClicked(false)}
					>
						Contact
					</a>
				</section>
			</motion.nav>
			<div
				className="menu-background"
				onClick={() => setIsMenuClicked(false)}
			></div>
		</>
	);
}
