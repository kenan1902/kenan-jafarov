import styles from "./ContactStyles.module.css";
import { motion } from "framer-motion";
import { TextAnimation, CustomAnimation } from "../../variants.js";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast';

function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zlqqsa7",
        "template_fcqjmln",
        formRef.current,
        "xqXrm4WK5YZPXexBl"
      )
      .then(() => {
        formRef.current.reset();
        toast.success('Email sent successfully!');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error('Failed to send email!');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        variants={TextAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        Contact
      </motion.h1>
      <motion.form
        action=""
        ref={formRef}
        onSubmit={sendEmail}
        variants={TextAnimation}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="formGroup" variants={TextAnimation}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </motion.div>
        <motion.div className="formGroup" variants={TextAnimation}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$"
            required
          />
        </motion.div>
        <motion.div className="formGroup" variants={TextAnimation}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </motion.div>
        <motion.input
          className="hover btn"
          type="submit"
          value="Submit"
          variants={CustomAnimation("toUp", 0.3)}
          initial="initial"
          whileInView="animate"
        />
      </motion.form>
    </section>
  );
}

export default Contact;