import React from "react";

// Responsive hook for demo (for production, use CSS or a library)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{
      ...styles.footer,
      padding: isMobile ? "24px 0 10px 0" : "38px 0 16px 0"
    }}>
      <div
        style={{
          ...styles.topRow,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 18 : 30,
          padding: isMobile ? "0 12px 10px 12px" : "0 42px 18px 42px"
        }}
      >
        <div style={{
          ...styles.brandCol,
          alignItems: isMobile ? "center" : "flex-start",
          marginBottom: isMobile ? 18 : 0
        }}>
          <span style={{
            ...styles.siteName,
            fontSize: isMobile ? "1.1rem" : "1.45rem"
          }}>UPSC Portal</span>
          <span style={styles.tagline}>Union Public Service Commission</span>
          <span style={styles.copyright}>
            &copy; {new Date().getFullYear()} UPSC. All rights reserved.
          </span>
        </div>
        <div style={{
          ...styles.linksCol,
          alignItems: isMobile ? "center" : "flex-start",
          marginBottom: isMobile ? 18 : 0
        }}>
          <div style={{
            ...styles.linkGroup,
            justifyContent: isMobile ? "center" : "flex-start"
          }}>
            <a href="#" style={styles.footerLink}>Home</a>
            <a href="#" style={styles.footerLink}>Resources</a>
            <a href="#" style={styles.footerLink}>Downloads</a>
            <a href="#" style={styles.footerLink}>FAQ</a>
            <a href="#" style={styles.footerLink}>Contact Officers</a>
          </div>
          <div style={{
            ...styles.legalGroup,
            justifyContent: isMobile ? "center" : "flex-start"
          }}>
            <a href="#" style={styles.footerLink}>Terms of Use</a>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Accessibility</a>
          </div>
        </div>
        <div style={{
          ...styles.contactCol,
          alignItems: isMobile ? "center" : "flex-end"
        }}>
          <div>
            <span style={styles.contactTitle}>Contact & Support</span>
            <span style={styles.contactInfo}>Email: help@upsc.gov.in</span>
            <span style={styles.contactInfo}>Phone: +91-11-2338-2714</span>
          </div>
          <div style={{
            ...styles.socialGroup,
            justifyContent: isMobile ? "center" : "flex-end"
          }}>
            <a href="#" aria-label="Twitter" style={styles.socialIcon}>🐦</a>
            <a href="#" aria-label="Facebook" style={styles.socialIcon}>📘</a>
            <a href="#" aria-label="LinkedIn" style={styles.socialIcon}>🔗</a>
          </div>
        </div>
      </div>
      <div style={{
        ...styles.bottomRow,
        fontSize: isMobile ? 12 : 14,
        margin: isMobile ? "0 12px" : "0 42px",
        paddingTop: isMobile ? 10 : 14
      }}>
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
    borderTop: "1.5px solid #e2e6f5",
    marginTop: 42,
    width: "100vw"
  },
  topRow: {
    display: "flex",
    maxWidth: 1200,
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
