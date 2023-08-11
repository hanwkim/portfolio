import "./ContactLink.scss";
import { useState } from "react";

interface LinkProps {
	icon: string;
	text: string;
	url: string;
	altText: string;
}

export default function ContactLink({
	icon,
	text,
	url,
	altText,
}: LinkProps) {
    const [buttonHover, setButtonHover] = useState<boolean>(false);

	return (
        <a
        className="contact__link"
        target="_blank"
        rel="noreferrer"
        href={url}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
    >
        <span className="contact__link-text">{text}</span>
        <img
            className={buttonHover ? "contact__link-image contact__link-image--hover" : "contact__link-image"}
            src={icon}
            alt={altText}
        ></img>
    </a>

	);
}
