import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Wise Verda is a company born from the spirit of the younger generation to provide creative and innovative solutions for future challenges.
            We are not just a business learning platform, but also a space to hone leadership, creativity, and social and environmental awareness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
