import styles from "./FooterStyles.module.css";
import { motion } from "framer-motion";
import { CustomAnimation } from "../../variants.js";

function Footer() {
  return (
    <motion.section
      id="footer"
      className={styles.container}
      variants={CustomAnimation("toDown", 1)}
      initial="initial"
      whileInView="animate"
    >
      <p>
        &copy; 2024 Kenan Jafarov <br />
        All rights reserved.
      </p>
    </motion.section>
  );
}

export default Footer;
