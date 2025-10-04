import React from "react";

// Responsive hook to detect mobile layout
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const statusStyles = {
  "Application Submitted": {
    background: "#e9f2ff",
    color: "#2773dd",
  },
  "Admit Card Available": {
    background: "#ebfbe9",
    color: "#219653",
  },
  "Payment Pending": {
    background: "#ffeded",
    color: "#bd232f",
  }
};

const DashboardCard = ({ title, status, deadline, badge }) => {
  const isMobile = useIsMobile();
  const highlight = statusStyles[badge] || {
    background: "#f1f3f6",
    color: "#666"
  };

  return (
    <div style={{
      ...styles.card,
      width: isMobile ? "96vw" : 340,
      minWidth: 220,
      maxWidth: "98vw",
      boxSizing: "border-box",
      padding: isMobile ? "18px 10px 16px 10px" : "28px 26px 20px 26px",
      fontSize: isMobile ? "1rem" : "1.08rem",
      alignItems: "center",
      margin: "0 auto"
    }}>
      <div style={{
        ...styles.headerRow,
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap"
      }}>
        <span style={{
          ...styles.title,
          fontSize: isMobile ? "1rem" : "1.16rem",
          textAlign: "center"
        }}>{title}</span>
        <span style={{ ...styles.badge, ...highlight }}>{badge}</span>
      </div>
      <div style={{
        ...styles.metaRow,
        justifyContent: "center"
      }}>
        <span style={styles.label}>Status: </span>
        <span style={styles.status}>{status}</span>
      </div>
      <div style={{
        ...styles.metaRow,
        justifyContent: "center"
      }}>
        <span style={styles.label}>Deadline: </span>
        <span style={styles.deadline}>{deadline}</span>
      </div>
      <button
        style={{
          ...styles.btn,
          fontSize: isMobile ? "0.98rem" : "1.01rem",
          padding: isMobile ? "10px 0" : "11px 0",
          width: "100%"
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#153eab")}
        onMouseOut={e => (e.currentTarget.style.background = "#153e7e")}
      >
        View Details &nbsp;➔
      </button>
    </div>
  );
};

const styles = {
  card: {
    boxShadow: "0 6px 30px #153e7e12",
    border: "1.5px solid #e9eff7",
    borderRadius: "18px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    transition: "all .2s"
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8
  },
  title: {
    fontFamily: '"Montserrat",sans-serif',
    fontWeight: 600,
    color: "#192b41"
  },
  badge: {
    padding: "4px 14px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: ".93rem",
    marginLeft: 10,
    minWidth: 84,
    textAlign: "center",
    transition: "background .13s, color .13s",
    boxShadow: "0 1px 8px #153e7e12"
  },
  metaRow: {
    display: "flex",
    gap: 7,
    alignItems: "center",
    margin: "8px 0"
  },
  label: {
    color: "#90a1c6",
    fontWeight: 500,
    fontFamily: '"Inter",sans-serif',
    fontSize: ".97rem"
  },
  status: {
    color: "#222c43",
    fontWeight: 700,
    fontFamily: '"Montserrat",sans-serif'
  },
  deadline: {
    color: "#273e7c",
    fontWeight: 700,
    fontFamily: '"Montserrat",sans-serif'
  },
  btn: {
    marginTop: "auto",
    background: "#153e7e",
    color: "#fff",
    fontWeight: 700,
    fontFamily: '"Inter",sans-serif',
    padding: "11px 0",
    border: "none",
    borderRadius: "7px",
    boxShadow: "0 2px 8px #153e7e18",
    cursor: "pointer",
    transition: "background .19s, box-shadow .16s"
  }
};

export default DashboardCard;
