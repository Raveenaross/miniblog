/* eslint-disable react/no-unescaped-entities */
import { NavLink, Link } from "react-router-dom";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ice from '../../assets/ice.jpg';
import architecture from '../../assets/architecture.jpg';
import tokyo from '../../assets/tokyo.jpg';
import flamingo from '../../assets/flamingo.jpg';
import rover from '../../assets/curiosityrover.jpg';
import aurora from '../../assets/auroraborealis.jpg';
import './About.css';
const About = () => {
  return (
    <div>
      <h1>Insight Digest</h1>
      <nav className='navbar'>
        <NavLink className="nav-links right-link" to="/">Home</NavLink>
        <NavLink className="nav-links right-link" to="/about">About</NavLink>
        <NavLink className="nav-links right-link" to="/contact">Contact</NavLink>
      </nav>
      <section>
        <h1>About Insight Digest</h1>
        <div className="main">
          <div className="block1">
            <h2>Welcome to Insight Digest</h2>
            <p className="para">Welcome to Insight Digest, a platform dedicated to exploring the latest developments in science, technology, culture, and more. Founded with a passion for knowledge sharing and discovery, Insight Digest aims to provide insightful articles that inform and inspire.</p>
            <h2>Our Mission</h2>
            <p className="para">At Insight Digest, our mission is to deliver engaging and accessible content that illuminates complex topics. We strive to foster curiosity and understanding, offering a fresh perspective on trends and innovations shaping our world today.</p>
            <h2>What We Offer</h2>
            <ul className="para">
              <li className="para-list"><b>Informative Content:</b>We curate articles that dive deep into various subjects, offering comprehensive insights and analysis.</li>
              <li className="para-list"><b>Engaging Stories:</b>Our goal is to captivate our readers with compelling narratives that bridge the gap between research and everyday understanding.</li>
              <li className="para-list"><b>Community Engagement:</b>We value interaction and encourage our readers to share their thoughts and perspectives on the topics we cover.</li>
            </ul>
            <h2>Our Values</h2>
            <ul className="para">
              <li className="para-list"><b>Integrity:</b>We uphold the highest standards of accuracy and transparency in our content.</li>
              <li className="para-list"><b>Passion for Learning:</b> We are driven by a genuine passion for learning and sharing knowledge with our audience.</li>
              <li className="para-list"><b>Innovation:</b>We embrace innovative approaches to storytelling and content delivery to enhance reader experience.</li>
            </ul>
            <h2>Connect With Us</h2>
            <p className="para">Have a question or suggestion? We'd love to hear from you! Feel free to reach out to us at contact@example.com or connect with us on social media platforms. Join our community and stay updated with our latest articles and updates.</p>
            <h2>Join Our Journey</h2>
            <p className="para">Explore Insight Digest and join us on a journey of discovery. Whether you're exploring new technologies, cultural trends, or scientific breakthroughs, we're here to keep you informed and inspired.</p>
          </div>
          <div className="block2">
            <div className="bx1">
              <div className="b1">
                <img src={flamingo} alt="img not found" width={400} height={509} />
              </div>
              <div className="b2">
              <img src={aurora} alt="img not found" width={300} height={253} />
                <img src={architecture} alt="img not found" width={300} height={252} />
              </div>
            </div>
            <div className="bx2">
              <div className="b3">
                <img src={rover} alt="img not found" width={300} height={252} />
                <img src={tokyo} alt="img not found" width={300} height={253} />
              </div>
              <div className="b4">
                <img src={ice} alt="img not found" width={400} height={509} />
            </div>
          </div>
        </div>
        </div>
      </section>
      <footer>
        <div className='box4'>
          <div className='footer-box-1'>
            <h5>Quick links</h5>
            <ul>
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to="/about" className='link'>About Us</Link></li>
              <li><Link to="/contact" className='link'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='footer-box-2'>
            <h5>Contact Information</h5>
            <ul>
              <li><PhoneRoundedIcon color='info' style={{ backgroundColor: "#102C57" }} className='icon' /><span>+1-234-567-8901</span></li>
              <li><EmailRoundedIcon color='info' style={{ backgroundColor: "#102C57" }} className='icon' /><span>contact@example.com</span></li>
              <li ><BusinessRoundedIcon color='info' style={{ backgroundColor: "#102C57" }} className='icon' /><span>123 Street, City, Country </span></li>
            </ul>
          </div>
          <div className='footer-box-3'>
            <h5>Follow us</h5>
            <ul>
              <li><TwitterIcon color='primary' style={{ backgroundColor: "#102C57" }} className='icon' /><span>Twitter</span></li>
              <li><FacebookIcon style={{ color: "#5DEBD7", backgroundColor: "#102C57" }} className='icon' /><span>Facebook</span></li>
              <li><InstagramIcon style={{ color: "#E90074", backgroundColor: "#102C57" }} className='icon' /><span>Instagram</span></li>
            </ul>
          </div>
        </div>
        <p className="reserved">
          2024 Insight Digest.All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default About;
