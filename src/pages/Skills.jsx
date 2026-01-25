import { motion } from "framer-motion";
import skillsData from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <motion.section className="skills container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <motion.div key={i} className="skill-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
