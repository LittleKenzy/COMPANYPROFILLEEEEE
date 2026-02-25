import styles from "./Products.module.css";
import foldex from "../assets/foldex_clean.png";

const productsData = [
  {
    id: 1,
    title: "Foldex",
    desc: "Foldex is the latest innovation from Wise Verda Company. This product is a smart solution for your storage and organization needs. With elegant and functional design, Foldex is here to make your daily activities easier.",
    price: "Rp. 59.999",
  },
];

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <h2 className={styles.title}>Our Products</h2>
        <div className={styles.grid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <img src={foldex} alt={product.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                <p className={styles.cardPrice}>Price: {product.price}</p>
                <a href="#contact" className={styles.cardButton}>
                  Contact Us
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
