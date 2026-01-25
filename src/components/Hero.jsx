import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Masa Depan Teknologi Digital Ada Di Sini</h1>
        <p className={styles.description}>
          Kami membantu bisnis Anda bertransformasi dan berkembang dengan solusi teknologi inovatif dan terpercaya.
        </p>
        <a href="#about" className={styles.ctaButton}>
          Pelajari Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default Hero;
