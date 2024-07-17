import { NavLink, Link } from "react-router-dom";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css'

import { useState } from "react";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    msg: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Insight Digest</h1>
      <nav className='navbar'>
        <NavLink className="nav-links right-link" to="/">Home</NavLink>
        <NavLink className="nav-links right-link" to="/about">About</NavLink>
        <NavLink className="nav-links right-link" to="/contact">Contact</NavLink>
      </nav>
      <h2 className="form-head">Contact Us</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit} className="form-bx">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required />
          <label htmlFor="msg">Message:</label>
          <textarea
            id="msg"
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            required />
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
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

export default Contact;
