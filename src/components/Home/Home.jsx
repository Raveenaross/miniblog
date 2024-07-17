/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { Stack } from '@mui/material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import img1 from '../../assets/telescopes.jpg';
import img2 from '../../assets/crops.jpg';
import img3 from '../../assets/chip.jpg';
import img4 from '../../assets/amazon.jpg';
import img5 from '../../assets/radar.jpg';
import img6 from '../../assets/stars.jpg';
import img7 from '../../assets/rocket.jpg';
import img8 from '../../assets/programming.jpg'
import img9 from '../../assets/jameswebb.jpg';
import img10 from '../../assets/drone.jpg';
import img11 from '../../assets/culturediversity.jpg';
import img12 from '../../assets/arts.jpg';
import img13 from '../../assets/global.jpg';
import img14 from '../../assets/mountain.jpg';
import img15 from '../../assets/climatechange.jpg';
import img16 from '../../assets/windmill.jpg';
import img17 from '../../assets/dna.webp';
import img18 from '../../assets/vaccine.jpg';
import img19 from '../../assets/Aihealthcare.png';


const Home = () => {

  const [activeContent, setActiveContent] = useState('space'); // Default to 'science'

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <h1>Insight Digest</h1>
      <nav className='navbar'>
        <NavLink className="nav-links right-link" to="/">Home</NavLink>
        <NavLink className="nav-links right-link" to="/about">About</NavLink>
        <NavLink className="nav-links right-link" to="/contact">Contact</NavLink>
      </nav>
      <h2 className='side-heading'>Featured Articles</h2>
      <section>
        <div className='box1'>
          <div className='minibox1'>
            <figure>
              <img src={img1} alt='img1 not found' width={600} height={400} />
              <figcaption>
                <p className='date'>June 2024</p>
                <h3>Under the Hawaiian Skies: Innovations in Astronomy</h3>
                <p>Hawaii remains a premier destination for astronomy with upgrades to the Subaru Telescope on Mauna Kea, enhancing its capabilities for distant galaxy studies. Advances in adaptive optics at the Mauna Kea Observatories have significantly improved image clarity. Together with ongoing projects like Pan-STARRS at Haleakalā, Hawaii is at the forefront of astronomical discovery.</p>
              </figcaption>
            </figure>
          </div>
          <div className='minibox2'>
            <img src={img2} alt='img not found' width={250} height={190} />
            <img src={img3} alt='img not found' width={250} height={190} />
            <img src={img4} alt='img not found' width={250} height={190} />
          </div>
          <div className='minibox3'>
            <div className='contents'>
              <p className='date'>
                June 2024
              </p>
              <h3>Farming Revolution: How Innovation is Shaping the Future of Agriculture</h3>
            </div>
            <div className='contents'>
              <p className='date'>
                June 2024
              </p>
              <h3>Chip Wars: The Race for Semiconductor Supremacy in 2024</h3>
            </div>
            <div className='contents'>
              <p className='date'>
                June 2024
              </p>
              <h3>Amazon Rainforest at Risk: Urgent Steps Needed for Preservation</h3>
            </div>
          </div>
        </div>
        <h2 className='side-heading'>Recent Articles</h2>
        <div className='box2'>
          <Stack className='btn-group' spacing={3} direction="row">
            <button className='nav-btn' onClick={() => handleContentChange('space')}>Space</button>
            <button className='nav-btn' onClick={() => handleContentChange('tech')}>Technology</button>
            <button className='nav-btn' onClick={() => handleContentChange('culture')}>Culture</button>
            <button className='nav-btn' onClick={() => handleContentChange('nature')}>Nature</button>
            <button className='nav-btn' onClick={() => handleContentChange('med')}>Medicine</button>
          </Stack>
          {activeContent === 'tech' && (
            <div className='box3' style={{ backgroundColor: "#A0DEFF" }}>
              <figure style={{ backgroundColor: "#A0DEFF" }}>
                <img src={img8} alt='img not found' width={350} height={250} />
                <p className='date' style={{ backgroundColor: "#A0DEFF" }}>June 2024</p>
                <h4 style={{ backgroundColor: "#A0DEFF", color: "#071952" }}>Latest in Programming Languages and Tools</h4>
                <p className='post-content' style={{ backgroundColor: "#A0DEFF", color: '#00215E' }}>The programming landscape continues to evolve with new languages like Rust gaining traction for their performance and safety features. Innovations in IDEs and frameworks are streamlining development processes and enhancing developer productivity</p>
              </figure>
              <figure style={{ backgroundColor: "#A0DEFF" }}>
                <img src={img9} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#A0DEFF" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#A0DEFF", color: "#071952" }}>James Webb Space Telescope: Unveiling the Universe</h4>
                <p className='post-content' style={{ backgroundColor: "#A0DEFF", color: '#00215E' }}>The James Webb Space Telescope (JWST) promises to revolutionize astronomy with its unprecedented capabilities for observing distant galaxies and planetary systems. Scheduled to launch soon, JWST aims to unveil cosmic mysteries and expand our understanding of the universe.</p>
              </figure>
              <figure style={{ backgroundColor: "#A0DEFF" }}>
                <img src={img10} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#A0DEFF" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#A0DEFF", color: "#071952" }}>Advancements in Drone Technology</h4>
                <p className='post-content' style={{ backgroundColor: "#A0DEFF", color: '#00215E' }}>Drone technology is advancing rapidly across industries, from autonomous flight capabilities to enhanced sensor integration for mapping, surveillance, and delivery applications. Innovations in AI and robotics are driving the next wave of drone functionalities.</p>
              </figure>
            </div>
          )}
          {activeContent === 'space' && (
            <div className='box3' style={{ backgroundColor: "#758694" }}>
              <figure style={{ backgroundColor: "#758694" }}>
                <img src={img5} alt='img not found' width={350} height={250} />
                <p className='date' style={{ backgroundColor: "#758694" }}>June 2024</p>
                <h4 style={{ backgroundColor: "#758694" }}>Exploring with Radar Technology</h4>
                <p className='post-content' style={{ backgroundColor: "#758694", color: 'white' }}>Cutting-edge radar systems are enhancing aerial surveillance and weather forecasting capabilities globally, revolutionizing how we monitor and predict atmospheric phenomena.</p>
              </figure>
              <figure style={{ backgroundColor: "#758694" }}>
                <img src={img6} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#758694" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#758694" }}>SpaceX's Latest Achievements</h4>
                <p className='post-content' style={{ backgroundColor: "#758694", color: 'white' }}>SpaceX continues to redefine space travel with successful launches of Starship prototypes and its ongoing efforts to make space exploration more accessible and sustainable.</p>
              </figure>
              <figure style={{ backgroundColor: "#758694" }}>
                <img src={img7} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#758694" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#758694" }}>Unveiling Mysteries of the Stars</h4>
                <p className='post-content' style={{ backgroundColor: "#758694", color: 'white' }}>New observational data reveals unprecedented insights into the life cycles of stars, shedding light on their formation, evolution, and interactions within galaxies.</p>
              </figure>
            </div>
          )}
          {activeContent === 'culture' && (
            <div className='box3' style={{ backgroundColor: "#FFDE4D" }}>
              <figure style={{ backgroundColor: "#FFDE4D" }}>
                <img src={img11} alt='img not found' width={350} height={250} />
                <p className='date' style={{ backgroundColor: "#FFDE4D" }}>June 2024</p>
                <h4 style={{ backgroundColor: "#FFDE4D", color: "#2D2424" }}>Cultural Diversity and Heritage</h4>
                <p className='post-content' style={{ backgroundColor: "#FFDE4D", color: '#FF4C29' }}>Celebrating cultural diversity enriches societies by preserving traditions, languages, and customs passed down through generations. Efforts to safeguard cultural heritage promote understanding and mutual respect worldwide.</p>
              </figure>
              <figure style={{ backgroundColor: "#FFDE4D" }}>
                <img src={img12} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#FFDE4D" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#FFDE4D", color: "#2D2424" }}>Artistic Expression and Innovation</h4>
                <p className='post-content' style={{ backgroundColor: "#FFDE4D", color: '#FF4C29' }}>Artistic expression fuels creativity and innovation, shaping cultural identities and fostering social cohesion. From traditional crafts to modern digital art, diverse forms of creativity contribute to cultural enrichment.</p>
              </figure>
              <figure style={{ backgroundColor: "#FFDE4D" }}>
                <img src={img13} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#FFDE4D" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#FFDE4D", color: "#2D2424" }}>Global Cultural Exchange</h4>
                <p className='post-content' style={{ backgroundColor: "#FFDE4D", color: '#FF4C29' }}>Cultural exchange initiatives bridge cultural divides and promote dialogue among communities worldwide. Collaborative projects in music, literature, and visual arts foster mutual appreciation and cultural diplomacy.</p>
              </figure>
            </div>
          )}
          {activeContent === 'nature' && (
            <div className='box3' style={{ backgroundColor: "#9BCF53" }}>
              <figure style={{ backgroundColor: "#9BCF53" }}>
                <img src={img14} alt='img not found' width={350} height={250} />
                <p className='date' style={{ backgroundColor: "#9BCF53" }}>June 2024</p>
                <h4 style={{ backgroundColor: "#9BCF53", color: "#416D19" }}>Biodiversity Conservation</h4>
                <p className='post-content' style={{ backgroundColor: "#9BCF53", color: '#114232' }}>Conserving biodiversity is crucial for maintaining ecosystem balance and supporting life on Earth. Efforts focus on preserving habitats, protecting endangered species, and promoting sustainable practices globally.</p>
              </figure>
              <figure style={{ backgroundColor: "#9BCF53" }}>
                <img src={img15} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#9BCF53" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#9BCF53", color: '#416D19' }}>Climate Action and Restoration</h4>
                <p className='post-content' style={{ backgroundColor: "#9BCF53", color: '#114232' }}>Addressing climate change requires urgent action to mitigate its impact on natural environments. Restoration projects aim to reclaim degraded lands, enhance resilience to climate extremes, and promote carbon sequestration.</p>
              </figure>
              <figure style={{ backgroundColor: "#9BCF53" }}>
                <img src={img16} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#9BCF53" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#9BCF53", color: "#416D19" }}>Ecotourism and Environmental Education</h4>
                <p className='post-content' style={{ backgroundColor: "#9BCF53", color: '#114232' }}>Ecotourism fosters appreciation for nature while promoting conservation and local community development. Environmental education initiatives empower individuals to make informed choices and participate in safeguarding natural resources.</p>
              </figure>
            </div>
          )}
          {activeContent === 'med' && (
            <div className='box3' style={{ backgroundColor: "#F99B7D" }}>
              <figure style={{ backgroundColor: "#F99B7D" }}>
                <img src={img17} alt='img not found' width={350} height={250} />
                <p className='date' style={{ backgroundColor: "#F99B7D" }}>June 2024</p>
                <h4 style={{ backgroundColor: "#F99B7D", color: "#ED2B2A" }}>Genomic Medicine and Precision Health</h4>
                <p className='post-content' style={{ backgroundColor: "#F99B7D", color: '#FFE5CA' }}>Genomic medicine continues to advance with breakthroughs in genome sequencing technologies, enabling personalized treatment plans based on an individual's genetic profile. Precision health initiatives are leveraging this data to tailor therapies and predict disease risks with greater accuracy.</p>
              </figure>
              <figure style={{ backgroundColor: "#F99B7D" }}>
                <img src={img18} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#F99B7D" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#F99B7D", color: "#ED2B2A" }}>Immunotherapy and Vaccine Innovations</h4>
                <p className='post-content' style={{ backgroundColor: "#F99B7D", color: '#FFE5CA' }}>Immunotherapy remains at the forefront of cancer treatment, with advances in CAR-T cell therapy and checkpoint inhibitors showing promising results in treating various cancers. Meanwhile, rapid developments in vaccine technology, such as mRNA vaccines, have revolutionized vaccine development and deployment, playing a crucial role in combating infectious diseases and pandemics.</p>
              </figure>
              <figure style={{ backgroundColor: "#F99B7D" }}>
                <img src={img19} alt='img not found' width={350} height={250} />
                <p style={{ backgroundColor: "#F99B7D" }} className='date'>June 2024</p>
                <h4 style={{ backgroundColor: "#F99B7D", color: "#ED2B2A" }}>AI in Healthcare</h4>
                <p className='post-content' style={{ backgroundColor: "#F99B7D", color: '#FFE5CA' }}>AI is revolutionizing healthcare through applications in medical imaging interpretation, personalized treatment recommendations, and predictive analytics for disease prevention. Machine learning algorithms are improving diagnostic accuracy and efficiency, leading to more effective patient care.</p>
              </figure>
            </div>
          )}
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

export default Home;
