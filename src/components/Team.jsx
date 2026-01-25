import React, { useState } from "react";
import styles from "./Team.module.css";

// CONTOH CARA PAKAI FOTO LOKAL:
// 1. Masukkan file foto (misal: nofal.jpg) ke folder /src/assets/
// 2. Import fotonya di sini:
import Ceo from "../assets/nisha.jpg";
import Sekertaris from "../assets/SEKERTARIS.jpg";
import cinta from "../assets/cinta.jpg";
import kirani from "../assets/kirani.jpg";
import aisyah from "../assets/ais.jpg";
import waode from "../assets/stefany.jpg";
import yemima from "../assets/yemima.jpg";
import ziah from "../assets/ziah.jpg";
import erlinda from "../assets/erlinda.jpg";
import naurah from "../assets/naurah.jpg";
import syafira from "../assets/safira.jpg";
import rahma from "../assets/rahmaaulia.jpg";
import aisyahNovitasari from "../assets/nofita.jpg";
import ellysabeth from "../assets/ela.jpg";
import liyana from "../assets/liyana.jpg";
import syarifah from "../assets/sarifa.jpg";
import ratih from "../assets/ratih.jpg";
import razwa from "../assets/razwa.jpg";
import nararya from "../assets/nararya.jpg";
import luluk from "../assets/luluk.jpg";
import azlina from "../assets/azlina.jpg";
import axelle from "../assets/axel.jpg";
import daffa from "../assets/daffa.jpg";
import maulana from "../assets/nofal.jpg";
import gendis from "../assets/gendis.jpg";
import hauna from "../assets/haunna.jpg";
import nugraha from "../assets/yusuf.jpg";
import farikhatul from "../assets/fia.jpg";
import veronica from "../assets/veronica.jpg";
import sifana from "../assets/sifana.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Mahrunnisha Berlian Nofarida",
    role: "CEO",
    photoUrl: Ceo,
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
    photoUrl: cinta,
  },
  {
    id: 4,
    name: "Kirani Nizaar F.",
    role: "DIRECTOR of MARKETING",
    photoUrl: kirani,
  },
  {
    id: 5,
    name: "Aisyah Ilham W.",
    role: "DIRECTOR of SALES",
    photoUrl: aisyah,
  },
  {
    id: 6,
    name: "Waode, Aurelia Stefany R.P",
    role: "DIRECTOR of FINANCE",
    photoUrl: waode,
  },
  {
    id: 7,
    name: "Yemima Oktavia S.",
    role: "DIRECTOR of PRODUCTION",
    photoUrl: yemima,
  },
  {
    id: 8,
    name: "Alifatuz Zahrah A.",
    role: "DIRECTOR of PUBLIC RELATION",
    photoUrl: farikhatul,
  },
  {
    id: 9,
    name: "Erlinda Safa H.",
    role: "ATTENDANCE & PAYROLL SPECIALIST",
    photoUrl: erlinda,
  },
  {
    id: 10,
    name: "Naurah Azalia D. A. A.",
    role: "TRAINING & DEVELOPMENT MANAGER 1",
    photoUrl: naurah,
  },
  {
    id: 11,
    name: "Syafira Mida L.",
    role: "TRAINING & DEVELOPMENT MANAGER 2",
    photoUrl: syafira,
  },
  {
    id: 12,
    name: "Rahma Aulia A.",
    role: "CREATIVE DESIGN MANAGER 1",
    photoUrl: rahma,
  },
  {
    id: 13,
    name: "Aisyah Novitasari",
    role: "CREATIVE DESIGN MANAGER 2",
    photoUrl: aisyahNovitasari,
  },
  {
    id: 14,
    name: "Ellysabeth G.",
    role: "MARKET RESEARCH",
    photoUrl: ellysabeth,
  },
  {
    id: 15,
    name: "Liyana Shafa K.",
    role: "BRAND MANAGER",
    photoUrl: liyana,
  },
  {
    id: 16,
    name: "Syarifah Nameera Q. A.",
    role: "EVENT MANAGER",
    photoUrl: syarifah,
  },
  {
    id: 17,
    name: "Ratih Ervi M.",
    role: "SALES & INVENTORY MANAGER 1",
    photoUrl: ratih,
  },
  {
    id: 18,
    name: "Razwa Ayu A. P.",
    role: "SALES & INVENTORY MANAGER 2",
    photoUrl: razwa,
  },
  {
    id: 19,
    name: "Nararya Luvena A.",
    role: "SALES & INVENTORY MANAGER 3",
    photoUrl: nararya,
  },
  {
    id: 20,
    name: "Luluk Mutiara W.",
    role: "SALES & INVENTORY MANAGER 4",
    photoUrl: luluk,
  },
  {
    id: 21,
    name: "Azlina Oktavia",
    role: "FINANCE MANAGER 1",
    photoUrl: azlina,
  },
  {
    id: 22,
    name: "Axelle Otadan S. J.",
    role: "FINANCE MANAGER 2",
    photoUrl: axelle,
  },
  {
    id: 23,
    name: "Veronica Januari C.",
    role: "PRODUCTION MANAGER 1",
    photoUrl: veronica,
  },
  {
    id: 24,
    name: "Daffa Atandra H.",
    role: "PRODUCTION MANAGER 2",
    photoUrl: daffa,
  },
  {
    id: 25,
    name: "Maulana Naufal F. S.",
    role: "R&D MANAGER",
    photoUrl: maulana,
  },
  {
    id: 26,
    name: "Gendis Ramadhani H.",
    role: "PURCHASING MANAGER 1",
    photoUrl: gendis,
  },
  {
    id: 27,
    name: "Hauna Alin K.",
    role: "PURCHASING MANGER 2",
    photoUrl: hauna,
  },
  {
    id: 28,
    name: "Nugraha Jusuf Ardani",
    role: "Q&C MANAGER",
    photoUrl: nugraha,
  },
  {
    id: 29,
    name: "Syivana Rizqi F.",
    role: "COMMUNITY RELATION MANAGER",
    photoUrl: sifana,
  },
  {
    id: 30,
    name: "Farikhatul Fauziah",
    role: "PUBLIC RELATION MANAGER",
    photoUrl: ziah,
  },
];

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter members based on search term (name or role)
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Initial members to show: CEO, Secretary, and Directors (first 8 members)
  // If searching, show all matches. If not searching, use expansion logic.
  const displayedMembers = searchTerm
    ? filteredMembers
    : isExpanded
      ? filteredMembers
      : filteredMembers.slice(0, 8);

  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Our Team</h2>
          <p>The innovation and passion behind our success</p>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Cari nama atau jabatan..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.grid}>
          {displayedMembers.length > 0 ? (
            displayedMembers.map((member) => (
              <div key={member.id} className={styles.cardWrapper}>
                <div className={styles.idCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.companyLogo}>WV</div>
                    <div className={styles.cardChip}></div>
                  </div>

                  <div className={styles.photoFrame}>
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className={styles.profilePhoto}
                        loading="lazy"
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
                    <div className={styles.idNumber}>
                      ID: {1000 + member.id}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>
              Tidak ada anggota tim yang ditemukan.
            </p>
          )}
        </div>

        {!searchTerm && filteredMembers.length > 8 && (
          <div className={styles.seeMoreContainer}>
            <button
              className={styles.seeMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "See More Staff"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
