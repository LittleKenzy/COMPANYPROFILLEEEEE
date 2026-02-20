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
              "Menjadi perusahaan inovatif yang mengintegrasikan produktivitas, pendidikan pintar, dan keberlanjutan hijau, sambil tetap kompetitif di pasar global."
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Misi</h3>
            <ul className={styles.list}>
              <li>Meningkatkan kreativitas, produktivitas, dan kepemimpinan di kalangan generasi muda melalui inovasi yang sadar lingkungan.</li>
              <li>Menanamkan tanggung jawab sosial dan ekologis pada siswa.</li>
              <li>Membangun budaya kolaborasi yang sehat, inklusif, dan berorientasi pada solusi.</li>
              <li>Menjadi platform pembelajaran untuk kewirausahaan berbasis nilai dan berintegritas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
