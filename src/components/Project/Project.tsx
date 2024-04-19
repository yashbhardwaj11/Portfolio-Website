import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  
  {
    title: "Eventia - Discover Events",
    description: "Eventia: Discover nearby events easily! Get personalized recommendations, buy tickets, and check-in with your phone. Stay updated on what's happening today or this weekend. Explore now! We share your info with event organizers for seamless event management. Learn more about your choices regarding information sharing. (Live on google play store)",
    techUsed: ["Kotlin", "Java" , "Firebase", 'XML'],
    link: "https://play.google.com/store/apps/details?id=com.devinfusion.eventiafinal",
  },
  {
    title: "Status Hive",
    description: "StatusHive: Your ultimate status companion! Download and share WhatsApp status effortlessly. Save images, videos, and GIFs from popular apps. Enjoy one-click sharing and auto-reply features. Supports WhatsApp Business. Discover the joy of sharing with StatusHive!",
    techUsed: ["Kotlin", "Java" , "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.devinfusion.statushive",
  },
  {
    title: "HiKisan",
    description: "Hikisan is an innovative agricultural assistance app developed as part of the Smart India Hackathon. It offers AI-powered disease detection for crops based on user-uploaded images. Additionally, Hikisan utilizes location data and weather reports to predict crop prices and provide tailored recommendations. The app's multifaceted approach to agricultural management contributed to our team's second-place ranking in the Smart India Hackathon.",
    techUsed: ["Kotlin", "Java" , "Firebase"],
    link: "https://github.com/yashbhardwaj11/HiKisanFinal",
  },
  {
    title: "Netflix UI Clone",
    description: "Developed a Netflix UI clone application that fetches movies and their details from an API and presents them in a user-friendly interface. Users can browse through a variety of movies, view details such as synopsis and ratings, and bookmark their favorite selections. Implemented local storage functionality using Room Database to allow users to save bookmarks for future reference.",
    techUsed: ["Kotlin", "Java" , "Firebase"],
    link: "https://github.com/yashbhardwaj11/NetflixClone",
  },
  {
    title: "Calorie Counter",
    description: "Calorie Counter: Track calories with ease! Snap a pic, get calorie counts. Features image recognition, detailed food info, and health assessment. Built with React, Tailwind CSS, and Google Generative AI API. Upload, click, and know your intake. Join us on GitHub to improve!",
    techUsed: ["React.js" , "Gemini"],
    link: "https://github.com/yashbhardwaj11/Calorie-Counter",
  },
  {
    title: "Terminal Portfolio",
    description: "Designed and implemented a terminal-based portfolio application inspired by the Linux command line interface. Users can navigate through the portfolio using familiar commands and search functionality. The terminal portfolio provides a seamless and efficient way for users to access and explore various sections of the portfolio, enhancing user experience and engagement.",
    techUsed: ["React.js" , "Node.js"],
    link: "https://yashbhardwajterminal.netlify.app/",
  },
  {
    title: "Mini Docs",
    description: "MiniDocs is a task management web app where you can add, read, and delete tasks. You can customize task colors and enjoy the unique feature of dragging tasks around the screen.",
    techUsed: ["React.js" , "Node.js"],
    link: "https://minidocsyash.netlify.app",
  },
  
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Project</h2>
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
