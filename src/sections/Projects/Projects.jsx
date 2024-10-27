import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { TextAnimation, CustomAnimation } from "../../variants.js";
import kjCabins from "../../assets/kj-logo-light.png";
import alinaLee from "../../assets/alinalee.png";
import kjShop from "../../assets/kjshop-logo.png";
import aytenHuseynli from "../../assets/aytenhuseynlilogo.png";
import cventures from "../../assets/cventures.png";

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
          src={cventures}
          link="https://www.continuous.vc/"
          h3="Continuous Ventures"
          p="Business"
        />
        <ProjectCard
          src={aytenHuseynli}
          link="https://aytenhuseynli.netlify.app/"
          h3="Ayten Huseynli"
          p="Portfolio"
        />
        <ProjectCard
          src={kjShop}
          link="https://thekjshop.netlify.app/"
          h3="KJ Shop"
          p="E-Commerce"
        />
        <ProjectCard
          src={kjCabins}
          link="https://kjcabins.netlify.app/"
          h3="KJ Cabins"
          p="Cabin Management"
        />
        <ProjectCard
          src={alinaLee}
          link="https://alinalee.netlify.app/"
          h3="Alina Lee"
          p="Portfolio"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
