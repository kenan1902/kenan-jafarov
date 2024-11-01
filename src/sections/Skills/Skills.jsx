import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";
import { TextAnimation, CustomAnimation } from "../../variants.js";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        variants={TextAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        Skills
      </motion.h1>
      <motion.div
        className={styles.skillList}
        variants={CustomAnimation("toDown", 0.75)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </motion.div>
      <motion.hr
        variants={CustomAnimation("toRight", 1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
      <motion.div
        className={styles.skillList}
        variants={CustomAnimation("toLeft", 0.75)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="Adobe Photoshop" />
        <SkillList src={checkMarkIcon} skill="Canva" />
      </motion.div>
      <motion.hr
        variants={CustomAnimation("toLeft", 1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      />
      <motion.div
        className={styles.skillList}
        variants={CustomAnimation("toUp", 0.75)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="jQuery" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Tailwind" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Playwright" />
        <SkillList src={checkMarkIcon} skill="MABL" />
      </motion.div>
    </section>
  );
}

export default Skills;
