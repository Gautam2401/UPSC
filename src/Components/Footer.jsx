import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topRow}>
        <div style={styles.brandCol}>
          <span style={styles.siteName}>UPSC Portal</span>
          <span style={styles.tagline}>Union Public Service Commission</span>
          <span style={styles.copyright}>
            &copy; {new Date().getFullYear()} UPSC. All rights reserved.
          </span>
        </div>
        <div style={styles.linksCol}>
          <div style={styles.linkGroup}>
            <a href="#" style={styles.footerLink}>Home</a>
            <a href="#" style={styles.footerLink}>Resources</a>
            <a href="#" style={styles.footerLink}>Downloads</a>
            <a href="#" style={styles.footerLink}>FAQ</a>
            <a href="#" style={styles.footerLink}>Contact Officers</a>
          </div>
          <div style={styles.legalGroup}>
            <a href="#" style={styles.footerLink}>Terms of Use</a>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Accessibility</a>
          </div>
        </div>
        <div style={styles.contactCol}>
          <div>
            <span style={styles.contactTitle}>Contact & Support</span>
            <span style={styles.contactInfo}>Email: help@upsc.gov.in</span>
            <span style={styles.contactInfo}>Phone: +91-11-2338-2714</span>
          </div>
          <div style={styles.socialGroup}>
            <a href="#" aria-label="Twitter" style={styles.socialIcon}>🐦</a>
            <a href="#" aria-label="Facebook" style={styles.socialIcon}>📘</a>
            <a href="#" aria-label="LinkedIn" style={styles.socialIcon}>🔗</a>
          </div>
        </div>
      </div>
      <div style={styles.bottomRow}>
        <span style={styles.bottomText}>
          Made with <span style={styles.heart}>❤</span> in India | Design & development: DTU Tech Council 2025
        </span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#23376d",
    color: "#f7f8fa",
    fontFamily: "Inter, Montserrat, sans-serif",
    padding: "38px 0 16px 0",
    borderTop: "1.5px solid #e2e6f5",
    marginTop: 42,
  },
  topRow: {
    display: "flex",
    maxWidth: 1200,
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0 42px 18px 42px",
    flexWrap: "wrap",
    gap: 30
  },
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 210
  },
  siteName: {
    fontWeight: 700,
    fontSize: "1.45rem",
    letterSpacing: ".6px",
    marginBottom: 3
  },
  tagline: {
    fontWeight: 400,
    fontSize: 15,
    color: "#c7d5ec"
  },
  copyright: {
    fontSize: 13,
    color: "#aec1db"
  },
  linksCol: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    minWidth: 200
  },
  linkGroup: {
    display: "flex",
    gap: 16,
    marginBottom: 5,
    flexWrap: "wrap"
  },
  legalGroup: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap"
  },
  footerLink: {
    color: "#e1eafc",
    fontSize: 15,
    textDecoration: "none",
    transition: "color .17s",
    fontWeight: 500,
    borderBottom: "1px solid transparent",
    paddingBottom: 1,
  },
  contactCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 200,
    gap: 13,
    alignItems: "flex-end"
  },
  contactTitle: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 1
  },
  contactInfo: {
    fontWeight: 400,
    color: "#c7d5ec",
    fontSize: 14
  },
  socialGroup: {
    marginTop: 10,
    display: "flex",
    gap: 17
  },
  socialIcon: {
    fontSize: 23,
    color: "#f8fafc",
    textDecoration: "none",
    transition: "color .16s",
    padding: "2px"
  },
  bottomRow: {
    textAlign: "center",
    color: "#b1caf7",
    fontSize: 14,
    paddingTop: 14,
    borderTop: "1px solid #334788",
    margin: "0 42px"
  },
  bottomText: {
    letterSpacing: ".04em"
  },
  heart: {
    color: "#e87777",
    fontWeight: 700,
    verticalAlign: "middle"
  }
};
