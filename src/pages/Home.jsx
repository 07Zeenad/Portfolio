import profile from "../assets/zeenad.png";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <motion.section className="home container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-text">
        <motion.h1 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          Muhammad Zeenad Fareed
        </motion.h1>
        <motion.h2 initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Full Stack Developer
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          BSCS graduate with strong software engineering foundations. Developed a full-scale Industrial Linkages Office Management System using React Native, ASP.NET Web API & SQL Server.
        </motion.p>
        <motion.div className="home-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a href="/projects"><button className="btn">View Projects</button></a>
          <a href="/contact"><button className="btn btn-primary">Contact Me</button></a>
        </motion.div>
      </div>
      <motion.div className="home-image" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
        <img src={profile} alt="Zeenad" />
      </motion.div>
    </motion.section>
  );
}
