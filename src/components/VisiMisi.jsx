import styles from './VisiMisi.module.css';

const VisiMisi = () => {
  return (
    <section id="visimisi" className={styles.visimisi}>
      <div className="container">
        <h2 className={styles.title}>Vision & Mission</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p>
              "To become an innovative company that integrates productivity, smart education, and green sustainability, while remaining competitive in the global market."
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Mission</h3>
            <ul className={styles.list}>
              <li>Enhance creativity, productivity, and leadership among the younger generation through environmentally conscious innovation.</li>
              <li>Instill social and ecological responsibility in students.</li>
              <li>Build a healthy, collaborative, and solution-oriented culture.</li>
              <li>Become a learning platform for value-based and integrity-driven entrepreneurship.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
