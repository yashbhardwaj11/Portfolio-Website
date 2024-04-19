import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    title: "Glazonoid Automates Pvt Ltd.",
    description: "I led the development of an Android app using Java and Firebase, integrating machine learning for mirror recognition. Responsible for end-to-end development, I designed and implemented UI/UX components.",
    techUsed: ["Kotlin" , "Java" , "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.glazonoidautomates.glazonoiderp&hl=en",
  },
  {
    title: "Monkhood living",
    description: "During my internship, I collaborated with the Android development team to create an application for simplifying the search and rental process of PG accommodations and flats for college students. I integrated third-party APIs like Google Maps to enhance property listings with accurate location services.",
    techUsed: ["Kotlin", "Java" , "Firebase"],
    link: "https://monkhood-frontend.vercel.app/",
  },
  {
    title: "Cars Karkhana",
    description: "I spearheaded the end-to-end development of a Cars Inspection App, conceptualizing, designing, and deploying it independently. Focused on user-centric interface design, I prioritized efficiency to streamline inspections. Additionally, I integrated real-time updates and offline functionality for a seamless user experience. Furthermore, I optimized performance to achieve swift loading times and minimal resource usage.",
    techUsed: ["Kotlin", "Java" , "Firebase"],
    link: "https://carskarkhana.com/",
  },
  {
    title: "Council Of Royal Roots",
    description: "At the Council of Royal Roots, I crafted impactful web solutions, emphasizing user engagement and functionality. From sleek designs to efficient backend systems, my work aimed to elevate the organization's online presence.",
    techUsed: ["React.js","Express.js", "Node.js" , "Firebase"],
    link: "https://councilofroyalroots.com/",
  },
  {
    title: "Addition Position : Technical Head, College Newsletter Society",
    description: "I led a team of 25+ students as the Technical Head of my college's newsletter society. We focused on projects to improve the college experience, including the development of the college newsletter. My role involved guiding the team, ensuring timely content delivery, and enhancing communication channels for students.",
    techUsed: ["React.js","Express.js", "Node.js" , "Firebase"],
    link: "https://tcc.adgitmdelhi.ac.in/",
  },
  {
    title: "Addition Position : Technical Head, College Annual Fest",
    description: "As the Tech Lead for my college's annual fest website for two consecutive years, I supervised a team of over 20 students. We worked on creating a user-friendly platform with features like user generation, pass creation, and validation for entry into the college fest. My role involved overseeing the development process, ensuring functionality, and coordinating with the team for successful website deployment.",
    techUsed: ["React.js","Express.js", "Node.js" , "Firebase"],
    link: "https://utkarsh2024.netlify.app/",
  },
];

export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techUsed.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
