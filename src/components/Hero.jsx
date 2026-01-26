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
          Wise Verda presents Foldex — a minimalist and modern multifunctional clipboard made from wood waste, leather, and scraps. An eco-friendly innovation for the productivity of the younger generation.
        </p>
        <div className={styles.btnGroup}>
          <a href="#about" className={styles.primaryBtn}>
            Learn More
          </a>
          <a href="#products" className={styles.secondaryBtn}>
            See Products
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
