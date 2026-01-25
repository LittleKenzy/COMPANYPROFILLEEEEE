import { MapPin, Mail, Phone, Instagram, Music2} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hubungi Kami</h2>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <MapPin size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Alamat</h3>
            <p className={styles.infoText}>Jl. Jenggolo 2 A, Desa Siwalan Panji, Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur. </p>
          </div>
          
          <div className={styles.infoItem}>
            <Mail size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>info@companyname.com</p>
          </div>
          
          <div className={styles.infoItem}>
            <Phone size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>WhatsApp</h3>
            <p className={styles.infoText}>+62 895-3242-19933</p>
          </div>

          <div className={styles.infoItem}>
            <Instagram size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Instagram</h3>
            <p className={styles.infoText}>@wise_verda_company</p>
          </div>

          <div className={styles.infoItem}>
            <Music2 size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Tiktok</h3>
            <p className={styles.infoText}>Wise Verda Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
