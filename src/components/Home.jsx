import { Link } from 'react-router-dom';
import img_logo from "../assets/logo1.png"

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      
      <p className="mission-statement">
        Hey, my name's Robin Lennox, a passionate web and software developer dedicated to building
        clean, functional, and user-friendly applications.   I'm very excited to share my projects 
        and skills that I've worked on during my time at Centennial College.  I hope you enjoy 
        checking out my portfolio and feel free to reach out if you have any questions or opportunities for collaboration!
      </p>

      <Link to="/about">
        <button className="about-button">Learn More About Me</button>
      </Link>

      <Link to="/projects">
        <button className="projects-button">View My Projects</button>
      </Link>

      <Link to="/contact">
        <button className="contact-button">Contact Me</button>
      </Link>
    </div>
  );
}