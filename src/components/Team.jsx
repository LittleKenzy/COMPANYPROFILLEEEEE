import React from "react";
import styles from "./Team.module.css";

// CONTOH CARA PAKAI FOTO LOKAL:
// 1. Masukkan file foto (misal: nofal.jpg) ke folder /src/assets/
// 2. Import fotonya di sini:
import Ceo from "../assets/IMG-20260111-WA0035.jpg";
import Sekertaris from "../assets/SEKERTARIS.jpg";
// import fotoSarah from '../assets/sarah.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Mahrunnisha Berlian Nofarida",
    role: "CEO",
    photoUrl: Ceo, // Ganti null dengan variabel foto, contoh: fotoNofal
  },
  {
    id: 2,
    name: "Ailsa Zakiyah Adhinda A.",
    role: "SECERTARY",
    photoUrl: Sekertaris,
  },
  {
    id: 3,
    name: "Cinta Rossi Putri P.",
    role: "DIRECTOR of HUMAN RESOURCES",
    photoUrl: null,
  },
  {
    id: 4,
    name: "Kirani Nizaar F.",
    role: "DIRECTOR of MARKETING",
    photoUrl: null,
  },
  {
    id: 5,
    name: "Aisyah Illham",
    role: "DIRECTOR of SALES",
    photoUrl: null,
  },
  {
    id: 6,
    name: "Waode, Aurelia Stefany R.P",
    role: "DIRECTOR of FINANCE",
    photoUrl: null,
  },
  {
    id: 7,
    name: "Yemima Oktavia S.",
    role: "DIRECTOR of PRODUCTION",
    photoUrl: null,
  },
  {
    id: 8,
    name: "Alifatuz Zahrah A.",
    role: "DIRECTOR of PUBLIC RELATION",
    photoUrl: null,
  },
  {
    id: 9,
    name: "Erlinda Safa H.",
    role: "ATTENDANCE & PAYROLL SPECIALIST",
    photoUrl: null,
  },
  {
    id: 10,
    name: "Naurah Azalia D. A. A.",
    role: "TRAINING & DEVELOPMENT MANAGER 1",
    photoUrl: null,
  },
  {
    id: 11,
    name: "Syafira Mida L. I.",
    role: "TRAINING & DEVELOPMENT MANAGER 2",
    photoUrl: null,
  },
  {
    id: 12,
    name: "Rahma Aulia A.",
    role: "CREATIVE DESIGN MANAGER 1",
    photoUrl: null,
  },
  {
    id: 13,
    name: "Aisyah Novitasari",
    role: "CREATIVE DESIGN MANAGER 2",
    photoUrl: null,
  },
  {
    id: 14,
    name: "Ellysabeth G.",
    role: "MARKET RESEARCH",
    photoUrl: null,
  },
  {
    id: 15,
    name: "Liyana Safah Shafa K.",
    role: "BRAND MANAGER",
    photoUrl: null,
  },
  {
    id: 16,
    name: "Syarifah Nameera Q. A.",
    role: "EVENT MANAGER",
    photoUrl: null,
  },
  {
    id: 17,
    name: "Ratih Ervi M.",
    role: "SALES & INVENTORY MANAGER 1",
    photoUrl: null,
  },
  {
    id: 18,
    name: "Razwa Ayu A. P.",
    role: "SALES & INVENTORY MANAGER 2",
    photoUrl: null,
  },
  {
    id: 19,
    name: "Nararya Luvena A.",
    role: "SALES & INVENTORY MANAGER 3",
    photoUrl: null,
  },
  {
    id: 20,
    name: "Luluk Mutiara W.",
    role: "SALES & INVENTORY MANAGER 4",
    photoUrl: null,
  },
  {
    id: 21,
    name: "Azlina Oktavia",
    role: "FINANCE MANAGER 1",
    photoUrl: null,
  },
  {
    id: 22,
    name: "Axelle O. S. J.",
    role: "FINANCE MANAGER 2",
    photoUrl: null,
  },
  {
    id: 23,
    name: "Veronica Januari C.",
    role: "PRODUCTION MANAGER 1",
    photoUrl: null,
  },
  {
    id: 24,
    name: "Daffa Atandra H.",
    role: "PRODUCTION MANAGER 2",
    photoUrl: null,
  },
  {
    id: 25,
    name: "Maulana Naufal F. S.",
    role: "R&D MANAGER",
    photoUrl: null,
  },
  {
    id: 26,
    name: "Gendis Ramadhani H.",
    role: "PURCHASING MANAGER 1",
    photoUrl: null,
  },
  {
    id: 27,
    name: "Hauna Alin K.",
    role: "PURCHASING MANGER 2",
    photoUrl: null,
  },
  {
    id: 28,
    name: "Nugraha Jusuf Ardani",
    role: "Q&C MANAGER",
    photoUrl: null,
  },
  {
    id: 29,
    name: "Syivana Rizqi F.",
    role: "COMMUNITY RELATION MANAGER",
    photoUrl: null,
  },
  {
    id: 30,
    name: "Farikhatul Fauziah",
    role: "PUBLIC RELATION MANAGER",
    photoUrl: null,
  },
];

const Team = () => {
  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Our Team</h2>
          <p>The innovation and passion behind our success</p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.cardWrapper}>
              <div className={styles.idCard}>
                <div className={styles.cardTop}>
                  <div className={styles.companyLogo}>PV</div>
                  <div className={styles.cardChip}></div>
                </div>

                <div className={styles.photoFrame}>
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className={styles.profilePhoto}
                    />
                  ) : (
                    <div className={styles.skeletonPhoto} />
                  )}
                </div>

                <div className={styles.cardDetails}>
                  <h3 className={styles.userName}>{member.role}</h3>
                  <p className={styles.userRole}>{member.name}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.barcode}>|| ||| || ||||</div>
                  <div className={styles.idNumber}>ID: {1000 + member.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
