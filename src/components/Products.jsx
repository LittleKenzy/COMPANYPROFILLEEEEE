import styles from "./Products.module.css";
import foldex from "../assets/foldex_clean.png";
import foldex2 from "../assets/foldex_2.jpg";
import foldex3 from "../assets/foldex_3.jpg";

const productsData = [
  {
    id: 1,
    title: "Foldex",
    desc: "Foldex is the latest innovation from Wise Verda Company. Available in our signature Green edition, this variant brings a fresh and natural vibe to your workspace. A smart solution for storage and organization with an elegant, functional design that makes your daily activities easier.",
    price: "Rp. 67.500",
    image: foldex,
  },
  {
    id: 2,
    title: "Foldex",
    desc: "Foldex is the latest innovation from Wise Verda Company. Now available in our bold Navy Blue edition, combining a cool and professional aesthetic with innovative color design. A smart solution for storage and organization with an elegant, functional design that makes your daily activities easier.",
    price: "Rp. 67.500",
    image: foldex2,
  },
  {
    id: 3,
    title: "Foldex",
    desc: "Foldex is the latest innovation from Wise Verda Company. Introducing the stylish Pink edition, a fresh color innovation that adds a soft and cheerful touch to your everyday essentials. A smart solution for storage and organization with an elegant, functional design that makes your daily activities easier.",
    price: "Rp. 67.500",
    image: foldex3,
  }
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
                <img src={product.image} alt={product.title} />
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
