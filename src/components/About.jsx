import myImg from "../assets/Cover_Photo.jpg"

export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={myImg} alt="Robin Lennox" className="about-photo" />
      
      <p className="about-text">
        My name is Robin Lennox. I am a passionate web and software developer with experience
        in building responsive and user-friendly applications. Currently, I am learning about 
        AI agents and LLMs, exploring how artificial intelligence can be integrated 
        into modern software solutions. I enjoy learning new technologies and applying them to 
        create meaningful projects.  I am also learning a variety of programming languages, 
        including JavaScript, Python, and Java, and I am always eager to expand my skill set.        
      </p>
      <p>
        Here are some of my key interests:
      </p>

      <ul className="about-interests">
        <li>Coding</li>
        <li>Reading</li>
        <li>Making music (FL Studio/Pro Tools)</li>
        <li>Working Out</li>
        <li>Video Games</li>
        <li>Sports (Tennis, Basketball, Football, Hockey, Squash</li>
      </ul>

      <a
        href="./RobinLennox_Resume_2026.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View My Resume
      </a>
    </div>
  );
}