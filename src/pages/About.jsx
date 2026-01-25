import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.section className="about container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I am Muhammad Zeenad Fareed, a BSCS graduate and Full Stack Developer with expertise in ASP.NET, React Native, SQL Server, OOP, DSA, Web Development, AI, and Software Engineering fundamentals. I have completed multiple projects including my FYP — Industrial Linkages Office Management System.
      </p>
      <div className="about-cards">
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Experience</h3>
          <p>Internships and academic projects covering full software lifecycle.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Education</h3>
          <p>BSCs in Computer Science — Fresh Graduate with strong foundation.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Skills</h3>
          <p>React, ASP.NET, Entity Framework, SQL, AI, Web, OOP, DSA.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
