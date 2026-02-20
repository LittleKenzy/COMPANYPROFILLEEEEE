import styles from "./Products.module.css";
import foldex from "../assets/foldex_clean.png";

const productsData = [
  {
    id: 1,
    title: "Foldex",
    desc: "Foldex adalah inovasi terbaru dari Wise Verda Company. Produk ini adalah solusi cerdas untuk kebutuhan penyimpanan dan organisasi Anda. Dengan desain yang elegan dan fungsional, Foldex hadir untuk memudahkan aktivitas harian Anda.",
    price: "Rp. 59.999",
  },
];

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <h2 className={styles.title}>Produk Kami</h2>
        <div className={styles.grid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <img src={foldex} alt={product.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                <p className={styles.cardPrice}>Harga: {product.price}</p>
                <a href="#contact" className={styles.cardButton}>
                  Hubungi Kami
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
