import './Contact.scss';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import mailIcon from '../../assets/icons/mail.svg';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">Get In Touch</h2>
            <div className="contact__image-container">
                <a className="contact__link" href="https://linkedin.com">
                    <img className="contact__image" src={linkedinIcon} alt="LinkedIn Icon"></img>
                </a>
                <a className="contact__link" href="https://github.com">
                    <img className="contact__image" src={githubIcon} alt="github icon"></img>
                </a>
                <a className="contact__link" href="https://gmail.com">
                    <img className="contact__image" src={mailIcon} alt="Email icon"></img>
                </a>
            </div>
        </section>
    )
}