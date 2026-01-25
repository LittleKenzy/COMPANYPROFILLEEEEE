import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Tentang Kami</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Wise Verda adalah Perusahaan yang lahir dari semangat generasi muda untuk menghadirkan solusi kreatif dan inovatif bagi tantangan masa depan.
            Kami bukan hanya wadah belajar bisnis, tetapi juga ruang untuk mengasah kepemimpinan, kreativitas, dan kepedulian sosial serta lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
