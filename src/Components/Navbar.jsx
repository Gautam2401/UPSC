import React from "react";

const styles = {
  navbar: {
    width: "100%",
    minHeight: 88,
    background: "#fff",
    borderBottom: "1.5px solid #eceef1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 36px",
    fontFamily: '"Montserrat", sans-serif',
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 40,
    minWidth: 220,
  },
  portalTitle: {
    fontWeight: 700,
    fontSize: 32,
    color: "#23376B",
    letterSpacing: "1px",
    lineHeight: 1.1,
  },
  subtitle: {
    fontWeight: 400,
    color: "#6f82a4",
    fontSize: 15,
    marginTop: "-4px",
    letterSpacing: 0.1,
  },
  center: {
    display: "flex",
    alignItems: "center",
    gap: 38,
    flex: 1,
    justifyContent: "center",
  },
  navlink: {
    textDecoration: "none",
    color: "#212738",
    fontWeight: 500,
    fontSize: 21,
    fontFamily: '"Inter", sans-serif',
    transition: "color .17s",
    padding: "2px 8px",
    borderRadius: 6,
  },
  navlinkActive: {
    color: "#1834a9",
    fontWeight: 700,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    minWidth: 270,
    justifyContent: "flex-end",
  },
  searchBox: {
    background: "#f6f8fa",
    border: "1.5px solid #e0e1e6",
    color: "#22376d",
    fontSize: "1.08rem",
    borderRadius: 13,
    fontFamily: '"Inter", sans-serif',
    padding: "13px 22px",
    width: 260,
    outline: "none",
  },
  bellIconWrap: {
    position: "relative",
    marginLeft: 6,
  },
  bellIcon: {
    fontSize: 26,
    color: "#22376d",
    verticalAlign: "middle",
    cursor: "pointer"
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-7px",
    background: "#ad251c",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    borderRadius: "13px",
    height: 22,
    width: 22,
    lineHeight: "22px",
    textAlign: "center",
    border: "2.5px solid #fff",
    boxShadow: "0 1px 7px #ad251c40"
  }
};

const pages = [
  { name: "Home", path: "#" },
  { name: "Notifications", path: "#" },
  { name: "Exam Schedule", path: "#" },
  { name: "Results", path: "#" },
  { name: "Resources", path: "#" },
  { name: "Contact", path: "#" },
];

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left logo and portal subtitle */}
      <div style={styles.left}>
        <span style={styles.portalTitle}>UPSC Portal</span>
        <span style={styles.subtitle}>
          Union Public Service Commission
        </span>
      </div>
      {/* Center nav links */}
      <div style={styles.center}>
        {pages.map((page, idx) => (
          <a key={idx} href={page.path} style={styles.navlink}>
            {page.name}
          </a>
        ))}
      </div>
      {/* Right search and bell */}
      <div style={styles.right}>
        <input
          type="text"
          style={styles.searchBox}
          placeholder="Search notifications, forms..."
        />
        <div style={styles.bellIconWrap}>
          <span role="img" aria-label="bell" style={styles.bellIcon}>
            🔔
          </span>
          <span style={styles.badge}>3</span>
        </div>
      </div>
    </nav>
  );
}
