import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Tentang Kami</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Wise Verda merupakan suatu perusahaan siswa yang berfokus pada
            pengembangan kesadaran lingkungan, inovasi hijau, dan kepemimpinan
            pemuda. Perusahaan ini dibentuk sebagai forum untuk belajar,
            berkolaborasi, dan menciptakan solusi kreatif untuk isu-isu
            keberlanjutan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
