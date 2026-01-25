import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Tentang Kami</h2>
          <p className={styles.text}>
            Selamat datang di COMPANY NAME, mitra terpercaya Anda dalam solusi teknologi. 
            Didirikan pada tahun 2023, kami berdedikasi untuk memberikan layanan terbaik 
            yang membantu bisnis tumbuh di era digital.
          </p>
          <p className={styles.text}>
            Tim kami terdiri dari profesional berpengalaman yang penuh semangat dalam 
            menciptakan inovasi yang berdampak positif bagi klien kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
