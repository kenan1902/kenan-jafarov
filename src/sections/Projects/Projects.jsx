import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { TextAnimation, CustomAnimation } from "../../variants.js";
import soon from "../../assets/soon.png";
import kjCabins from "../../assets/kj-logo-light.png";
import alinaLee from "../../assets/alinalee.png";
import kjShop from "../../assets/kjshop-logo.png";

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
        variants={CustomAnimation("toLeft", 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <ProjectCard
          src={kjCabins}
          link="https://kjcabins.netlify.app/"
          h3="KJ Cabins"
          p="Cabin Management App"
        />
        <ProjectCard
          src={alinaLee}
          link="https://alinalee.netlify.app/"
          h3="Alina Lee"
          p="Photographer Portfolio"
        />
        <ProjectCard
          src={kjShop}
          link="https://thekjshop.netlify.app/"
          h3="KJ Shop"
          p="E-Commerce"
        />
        <ProjectCard
          src={soon}
          link="https://github.com/kenan1902/"
          h3="New Project"
          p="Coming Soon"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
