import React from "react";


// Example SVG icons (you can replace these with imports or SVG components)
const icons = [
  (<svg height={36} viewBox="0 0 20 20" fill="#22376D"><path d="M5.5 2a0.5 0.5 0 1 1 1 0v2A0.5 0.5 0 0 1 5.5 4V2zM13.5 2a0.5 0.5 0 1 1 1 0v2A0.5 0.5 0 0 1 13.5 4V2zM3 6A2 2 0 0 1 5 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z"/></svg>), // Apply Online
  (<svg height={36} viewBox="0 0 20 20" fill="#22376D"><path d="M10 4V10l3 3V4h1v10H6V4h1v9l3-3V4h1z"/></svg>), // Calendar
  (<svg height={36} viewBox="0 0 20 20" fill="#22376D"><circle cx="10" cy="6" r="2"/><rect x="8" y="10" width="4" height="7" rx="2"/></svg>), // Results
];

const cardData = [
  {
    icon: icons[0],
    title: "Apply Online",
    subtitle: "Submit applications for various UPSC examinations",
    link: "Access Now"
  },
  {
    icon: icons[1],
    title: "Exam Schedule",
    subtitle: "View upcoming exam dates and registration deadlines",
    link: "Access Now"
  },
  {
    icon: icons[2],
    title: "Results",
    subtitle: "Check your examination results and merit lists",
    link: "Access Now"
  }
];

export default function HeroSection() {
  return (
    <section style={styles.section}>
      <div style={styles.headline}>
        Your Gateway to <span style={styles.accent}>Civil Services</span>
      </div>
      <div style={styles.subtitle}>
        Streamlined access to UPSC examinations, notifications, and resources. Your journey to public service starts here.
      </div>
      <div style={styles.buttonRow}>
        <button style={styles.primaryBtn}>
          Latest Notifications <span style={styles.arrow}>→</span>
        </button>
        <button style={styles.secondaryBtn}>Download Forms</button>
      </div>
      <div style={styles.cardsRow}>
        {cardData.map((card, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardIcon}>{card.icon}</div>
            <div style={styles.cardTitle}>{card.title}</div>
            <div style={styles.cardSubtitle}>{card.subtitle}</div>
            <div style={styles.cardAccess}>
              {card.link} <span style={styles.cardArrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    padding: "60px 0 40px 0",
    background: "linear-gradient(180deg, #fff 60%, #ffefba 100%)"
  },
  headline: {
    textAlign: "center",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: "3rem",
    letterSpacing: "0.5px",
    marginBottom: 20,
    color: "#222D3A"
  },
  accent: {
    color: "#1843bc"
  },
  subtitle: {
    textAlign: "center",
    color: "#7081A8",
    fontSize: "1.23rem",
    fontFamily: '"Inter", sans-serif',
    marginBottom: 38,
    maxWidth: 800,
    margin: "0 auto 38px auto"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: 22,
    marginBottom: 50
  },
  primaryBtn: {
    background: "#22376D",
    color: "#fff",
    border: "none",
    fontSize: "1.13rem",
    borderRadius: 12,
    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif',
    padding: "18px 36px",
    boxShadow: "0 4px 16px #22376D10",
    cursor: "pointer",
    transition: "background .16s"
  },
  arrow: {
    display: "inline-block",
    marginLeft: 8,
    fontWeight: 700,
    fontSize: "1.1em"
  },
  secondaryBtn: {
    background: "#fff",
    border: "2px solid #F1F4F9",
    color: "#22376D",
    fontWeight: 700,
    fontSize: "1.13rem",
    fontFamily: '"Montserrat", sans-serif',
    borderRadius: 12,
    padding: "18px 36px",
    boxShadow: "0 4px 12px #22376D08",
    cursor: "pointer",
    transition: "border .13s"
  },
  cardsRow: {
    display: "flex",
    gap: 38,
    justifyContent: "center",
    marginTop: 30
  },
  card: {
    background: "linear-gradient(180deg, #fff 60%, #d6cdaeff 100%)",
    borderRadius: 18,
    boxShadow: "0 6px 20px rgba(34, 55, 109, 0.07)",
    border: "1px solid #F1F4F9",
    width: 340,
    minHeight: 250,
    padding: "38px 26px 24px 26px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  cardIcon: {
    background: "#f3f6fa",
    borderRadius: "50%",
    width: 62,
    height: 62,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 19
  },
  cardTitle: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: "1.21rem",
    color: "#1b2242",
    marginBottom: 8
  },
  cardSubtitle: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    color: "#6B7796",
    textAlign: "center",
    fontSize: "1.04rem",
    marginBottom: 35
  },
  cardAccess: {
    fontFamily: '"Inter", sans-serif',
    color: "#22376D",
    fontWeight: 700,
    fontSize: "1.08rem",
    marginTop: "auto",
    cursor: "pointer"
  },
  cardArrow: {
    marginLeft: 6,
    fontWeight: 700,
    fontSize: "1.04rem"
  }
  
};
