import styles from "./Footer.module.css";
import { Instagram, Youtube, Music2, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brandSection}>
            <h3 className={styles.brand}>Wise Verda Company</h3>
            <p className={styles.tagline}>
              Innovative Sustainable Solutions for a Greener Future
            </p>
            <div className={styles.socialSection}>
              <a
                href="https://www.instagram.com/wiseverda.company/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com/foldex.wiseverda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@wise.verda.company19"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@foldex.wiseverda_company"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a
                href="https://www.youtube.com/@wiseverdastudentcompany"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://wa.me/62895324219933"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Hubungi Kami</h4>
            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.icon} />
              <p>
                Jl. Jenggolo 2 A, Desa Siwalan Panji, Kecamatan Buduran,
                Kabupaten Sidoarjo, Jawa Timur.
              </p>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.icon} />
              <p>wiseverda.studentcompany19@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} className={styles.icon} />
              <p>+62 895-3242-19933</p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Profile Wise Verda. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
