import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Tentang Kami</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
           Kami adalah perusahaan siswa yang bergerak di bidang produk ramah lingkungan dengan inovasi unggulan "Foldex", papan dada multifungsi yang praktis, minimalis, dan kekinian. Foldex dilengkapi kantong untuk dokumen, uang, dan alat tulis, serta dibuat dari papan dada bekas dan kulit daur ulang. Wise Verda hadir sebagai wadah bagi siswa untuk belajar dunia kerja nyata sekaligus menghadirkan produk fungsional untuk generasi muda. 🌱✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
