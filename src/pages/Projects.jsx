import { motion } from "framer-motion";
import projectsData from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <motion.section className="projects container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <motion.div key={i} className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
