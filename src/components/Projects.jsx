import webDesignImg from '../assets/html.png';
import travelProImg from '../assets/srs.png';
import swimMeetImg from '../assets/swimmeet.png';

export default function Projects() {
  const projects = [
    {
      title: 'Swim Meet Management System - C#',
      img: swimMeetImg,
      description: `Created a functional swim meet management app using C# that can add swimmers and events, generate heats, and export documents.
                    Developed a GUI to easily use all features, including importing lists of events or swimmers.`,
      role: 'Full-Stack Developer',
      outcome: 'Delivered a usable software tool for swim meet organizers to manage events efficiently.'
    },
    {
      title: 'Web Design - Camping/Yurt Booking Website',
      img: webDesignImg,
      description: `Designed a marketing and booking website for a camping and yurt rental park. 
                    Created descriptive pages with photo galleries, a contact-us form, and a responsive design for web, tablet, and mobile.`,
      role: 'Frontend Developer',
      outcome: 'Delivered a fully functional responsive website enhancing user experience and bookings.'
    },
    {
      title: 'Software Requirements Specification - TravelPro Bookings App',
      img: travelProImg,
      description: `Worked with a team using Agile practices to develop an SRS document for TravelPro, a mobile and web app for travel bookings.
                    Created UML diagrams and use cases for stakeholders with functional and non-functional requirements.`,
      role: 'Team Member / Analyst',
      outcome: 'Produced clear documentation and diagrams that guided development and stakeholder understanding.'
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.img} alt={proj.title} className="project-img" />
            <div className="project-text">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <p><strong>Role:</strong> {proj.role}</p>
              <p><strong>Outcome:</strong> {proj.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}