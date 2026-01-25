import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.mesh}></div>
      <div className={styles.content}>
        <div className={styles.badge}>Innovative Sustainable Solutions</div>
        <h1 className={styles.title}>
          Wise <span className={styles.highlight}>Verda</span> Company
        </h1>
        <p className={styles.description}>
          Masa depan hijau dimulai dari sini. Kami menghadirkan inovasi yang
          ramah lingkungan untuk menciptakan dampak positif bagi bumi.
        </p>
        <div className={styles.btnGroup}>
          <a href="#about" className={styles.primaryBtn}>
            Pelajari Lebih Lanjut
          </a>
          <a href="#products" className={styles.secondaryBtn}>
            Lihat Produk
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
