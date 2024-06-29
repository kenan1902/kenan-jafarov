import styles from "./ProjectsStyles.module.css";
import apple from "../../assets/iphone15-1.png";
import cinema from "../../assets/movies.png";
import ecommerce from "../../assets/e-commerce.png";
import hotel from "../../assets/hotel.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { TextAnimation, CustomAnimation } from "../../variants.js";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        variants={TextAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        Projects
      </motion.h1>
      <motion.div
        className={styles.projectsContainer}
        variants={CustomAnimation("toLeft", 1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <ProjectCard
          src={apple}
          link="https://github.com/kenan1902/apple-website"
          h3="Apple"
          p="Iphone 15"
        />
        <ProjectCard
          src={cinema}
          link="https://github.com/kenan1902/movies-website"
          h3="Movies"
          p="Movie Library"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/kenan1902/ecommerce-website"
          h3="E-Commerce"
          p="Online Shop"
        />
        <ProjectCard
          src={hotel}
          link="https://github.com/kenan1902/hotel-website"
          h3="Hotel Booking"
          p="Book Online"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
