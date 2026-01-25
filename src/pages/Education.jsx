import { motion } from "framer-motion";
import "./Education.css";

export default function Education() {
  const timeline = [
    { year: "2022-2026", degree: "BSCS", institute: "Pir Mehr Ali Shah University, Rawalpindi" },
    { year: "2019-2021", degree: "Intermediate", institute: "Allama Iqbal College Bagh" },
    { year: "2017-2019", degree: "Matriculation", institute: "Govt. High School" },
  ];

  return (
    <motion.section className="education container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education</h2>
      <div className="timeline">
        {timeline.map((item, i) => (
          <motion.div key={i} className="timeline-item" whileHover={{ scale: 1.02 }}>
            <span className="timeline-year">{item.year}</span>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p>{item.institute}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
