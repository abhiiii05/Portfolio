import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Abhijith Viju Priya Rani</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/abhijith-viju" className="footer__social-link"
                       target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/abhiiii.iiii?igsh=d2hnMHJzY2NlYXI5" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://x.com/abhiiii0005?t=fyzuQAqeWekenywLljUl1g&s=08" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy"></span>
            </div>
        </footer>
    )
}

export default Footer;