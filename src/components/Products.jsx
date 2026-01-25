import styles from './Products.module.css';

const productsData = [
  { id: 1, title: "Web Development", desc: "Pembuatan website responsif dan modern untuk bisnis Anda." },
  { id: 2, title: "Mobile Apps", desc: "Aplikasi mobile Android & iOS yang user-friendly." },
  { id: 3, title: "Digital Marketing", desc: "Strategi pemasaran digital untuk menjangkau lebih banyak pelanggan." },
  { id: 4, title: "UI/UX Design", desc: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal." },
  { id: 5, title: "Cloud Solutions", desc: "Solusi cloud yang aman dan skalabel untuk infrastruktur IT Anda." },
  { id: 6, title: "IT Consulting", desc: "Konsultasi ahli untuk transformasi digital perusahaan." },
];

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <h2 className={styles.title}>Layanan Kami</h2>
        <div className={styles.grid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                {/* Placeholder for image */}
                <span>📦</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                <a href="#contact" className={styles.cardButton}>Hubungi Kami</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
