import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Non, cum asperiores! Nulla hic at ipsam blanditiis, harum incidunt impedit. Blanditiis!
                </p>
                <div className="footer__socials">
                    <a href="http://linkedin.com/" target="_blank" rel='noreferrer nooperler'><FaLinkedin/></a>
                    <a href="http://facebook.com/" target="_blank" rel='noreferrer nooperner'><FaFacebook/></a>
                    <a href="http://twitter.com/" target="_blank" rel='noreferrer nooperner'><AiOutlineTwitter/></a>
                    <a href="http://instagram.com/" target="_blank" rel='noreferrer nooperner'><AiFillInstagram/></a>

                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/palns">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2020 VAWULENS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer