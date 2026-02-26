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
    name: "Mahrunnisha Nofarida",
    role: "CEO",
    photoUrl: Ceo,
  },
  {
    id: 2,
    name: "Ailsa Azalia",
    role: "Secretary",
    photoUrl: Sekertaris,
  },
  {
    id: 3,
    name: "Cinta Pratama",
    role: "Director of HRD",
    photoUrl: cinta,
  },
  {
    id: 4,
    name: "Kirani Fajarina",
    role: "Director of Marketing",
    photoUrl: kirani,
  },
  {
    id: 5,
    name: "Aisyah Tirta",
    role: "Director of Sales",
    photoUrl: aisyah,
  },
  {
    id: 6,
    name: "Waode Purwanto",
    role: "Director of Finance",
    photoUrl: waode,
  },
  {
    id: 7,
    name: "Yemima Satoko",
    role: "Director of Production",
    photoUrl: yemima,
  },
  {
    id: 8,
    name: "Alfiatuz Ariyanti",
    role: "Director of Public Relations",
    photoUrl: farikhatul,
  },
  {
    id: 9,
    name: "Ratih Mahesti",
    role: "Sales & Inventory Manager",
    photoUrl: erlinda,
  },
  {
    id: 10,
    name: "Naurah Damara",
    role: "Training & Development 1",
    photoUrl: naurah,
  },
  {
    id: 11,
    name: "Syafira Izzaty",
    role: "Training & Development Manager",
    photoUrl: syafira,
  },
  {
    id: 12,
    name: "Rahma Aziz",
    role: "Creative Design Manager",
    photoUrl: rahma,
  },
  {
    id: 13,
    name: "Aisyah Novitasari",
    role: "Creative Design Manager",
    photoUrl: aisyahNovitasari,
  },
  {
    id: 14,
    name: "Ellysabeth Pratiwi",
    role: "Marketing Research",
    photoUrl: ellysabeth,
  },
  {
    id: 15,
    name: "Liyana Khoirunisa",
    role: "Brand Manager",
    photoUrl: liyana,
  },
  {
    id: 16,
    name: "Syarifah Assegaf",
    role: "Event Manager",
    photoUrl: syarifah,
  },
  {
    id: 17,
    name: "Erlinda Hartanti",
    role: "APS",
    photoUrl: ratih,
  },
  {
    id: 18,
    name: "Razwa Putri",
    role: "Sales & Inventory Manager",
    photoUrl: razwa,
  },
  {
    id: 19,
    name: "Nararya Argarista",
    role: "Sales & Inventory Manager",
    photoUrl: nararya,
  },
  {
    id: 20,
    name: "Luluk Wahidah",
    role: "Sales & Inventory Manager",
    photoUrl: luluk,
  },
  {
    id: 21,
    name: "Azlina Oktaviana",
    role: "Finance Manager 2",
    photoUrl: azlina,
  },
  {
    id: 22,
    name: "Axelle Jati",
    role: "Finance Manager 1",
    photoUrl: axelle,
  },
  {
    id: 23,
    name: "Veronica Christi",
    role: "Production Manager 2",
    photoUrl: veronica,
  },
  {
    id: 24,
    name: "Daffa Hafidz",
    role: "Production Manager 1",
    photoUrl: daffa,
  },
  {
    id: 25,
    name: "Maulana Sururi",
    role: "Research and Development",
    photoUrl: maulana,
  },
  {
    id: 26,
    name: "Gendis Harvianti",
    role: "Purchasing Manager 1",
    photoUrl: gendis,
  },
  {
    id: 27,
    name: "Hauna Khairiyyah",
    role: "Purchasing Manager 2",
    photoUrl: hauna,
  },
  {
    id: 28,
    name: "Nugraha Ardhani",
    role: "Quality Control Manager",
    photoUrl: nugraha,
  },
  {
    id: 29,
    name: "Syivana Fauziah",
    role: "Community Relations Manager",
    photoUrl: sifana,
  },
  {
    id: 30,
    name: "Farikhatul Fauziah",
    role: "Public Relations Manager",
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
          <h2>Our Team</h2>
          <p>innovation and passion behind our success</p>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name or position..."
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
              No team members found.
            </p>
          )}
        </div>

        {!searchTerm && filteredMembers.length > 8 && (
          <div className={styles.seeMoreContainer}>
            <button
              className={styles.seeMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "View More Staff"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
