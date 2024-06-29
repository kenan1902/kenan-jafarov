import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/kenan-portrait.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";
import { TextAnimation, ImageAnimation } from "../../variants.js";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        variants={ImageAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Kenan Jafarov"
          variants={ImageAnimation}
        />
        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          variants={ImageAnimation}
        />
      </motion.div>

      <motion.div
        variants={TextAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className={styles.info}
      >
        <motion.h1 variants={TextAnimation}>
          Kenan
          <br />
          Jafarov
        </motion.h1>

        <motion.h2 variants={TextAnimation}>Front-End Developer</motion.h2>

        <motion.span variants={TextAnimation}>
          <a href="https://www.instagram.com/kenan_1902/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/kenan1902" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/kenan1902/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </motion.span>
        <motion.p variants={TextAnimation} className={styles.description}>
          Elevating user experiences with elegant code and design.
        </motion.p>
        <motion.a variants={TextAnimation} href={CV} download>
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
