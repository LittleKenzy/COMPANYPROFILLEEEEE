import styles from './VisiMisi.module.css';

const VisiMisi = () => {
  return (
    <section id="visimisi" className={styles.visimisi}>
      <div className="container">
        <h2 className={styles.title}>Visi & Misi</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Visi</h3>
            <p>
              "To become an innovative company that integrates productivity, smart education, and green sustainability, while ramaining competitive in the global market. "
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Misi</h3>
            <ul className={styles.list}>
              <li>To cultivate creativity, productivity, and leadership among young people through environmentally conscious innovation.</li>
              <li>To instill social and ecological responsibility in students.</li>
              <li>To foster a healthy, inclusive, and solution-oriented culture of collaboration.</li>
              <li>To serve as a learning platform for value-based and integrity-driven entrepreneurship.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
