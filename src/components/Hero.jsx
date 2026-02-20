import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.mesh}></div>
      <div className={styles.content}>
        <div className={styles.badge}>Solusi Berkelanjutan yang Inovatif</div>
        <h1 className={styles.title}>
          Wise <span className={styles.highlight}>Verda</span> Company
        </h1>
        <p className={styles.description}>
          Wise Verda mempersembahkan Foldex — clipboard multifungsi minimalis dan modern yang terbuat dari limbah kayu, kulit, dan sisa kain. Inovasi ramah lingkungan untuk produktivitas generasi muda.
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
