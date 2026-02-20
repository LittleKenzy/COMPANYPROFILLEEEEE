import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Tentang Kami</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Wise Verda adalah perusahaan yang lahir dari semangat generasi muda untuk memberikan solusi kreatif dan inovatif bagi tantangan di masa depan.
            Kami bukan hanya platform pembelajaran bisnis, tetapi juga ruang untuk mengasah kepemimpinan, kreativitas, dan kesadaran sosial dan lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
