import React, { useState } from "react";

// --- ICONS (as in your code) ---
const downloadIcon = (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#29376d" d="M12 16.5l-5-5h3V4h4v7.5h3l-5 5zM5 20h14v-2H5v2z"/></svg>
);
const calendarIcon = (
  <svg width="34" height="34" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#92ad8b"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/><rect x="11" y="7" width="2" height="10" rx="1" fill="#fff"/></svg>
);
const faqIcon = (
  <svg width="33" height="33" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#aebd8e"/><path d="M10.5 11.5a1.5 1.5 0 1 1 1 0v.5a1 1 0 1 0 2 0V11A3 3 0 1 0 12 14.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="16.5" r="1" fill="#fff"/></svg>
);
const contactIcon = (
  <svg width="33" height="33" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#9fcdb3"/><path d="M8 17v-2a4 4 0 0 1 8 0v2M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const externalIcon = (
  <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M15 3h6v6" stroke="#22376d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#22376d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" stroke="#22376d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// --- Responsive hook ---
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

// --- DownloadItem and ResourceCard as before ---
function DownloadItem({ title, sub, link, isMobile }) {
  return (
    <a href={link} style={{
      ...styles.downloadRow,
      padding: isMobile ? "10px 8px 8px 8px" : "13px 18px 10px 16px",
      fontSize: isMobile ? "0.98em" : "1.07em"
    }}>
      <div>
        <div style={styles.dTitle}>{title}</div>
        <div style={styles.dSub}>{sub}</div>
      </div>
      <div style={styles.dIcon}>{downloadIcon}</div>
    </a>
  );
}

function ResourceCard({ icon, title, desc, link, isMobile }) {
  return (
    <div style={{
      ...styles.resourceCard,
      width: isMobile ? "90vw" : 304,
      padding: isMobile ? "22px 10px 18px 10px" : "40px 26px 28px 26px"
    }}>
      <div style={styles.rIcon}>{icon}</div>
      <div style={{...styles.rTitle, fontSize: isMobile ? "1.05rem" : "1.18rem"}}>{title}</div>
      <div style={{...styles.rDesc, fontSize: isMobile ? ".93rem" : ".99rem"}}>{desc}</div>
      <a href={link} style={{
        ...styles.rBtn,
        fontSize: isMobile ? ".95em" : ".99em",
        padding: isMobile ? "8px 10px" : "10px 15px"
      }}>
        Access Now <span style={styles.rBtnIcon}>{externalIcon}</span>
      </a>
    </div>
  );
}

// --- Main Component ---
export default function ResourcesDownloads() {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(isMobile);

  React.useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <section style={{
      ...styles.bg,
      padding: isMobile ? "10px 0 16px 0" : "42px 0 46px 0"
    }}>
      <div
        style={{
          ...styles.heading,
          fontSize: isMobile ? "1.25rem" : "2.6rem",
          cursor: isMobile ? "pointer" : "default",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => isMobile && setCollapsed(c => !c)}
      >
        Resources & Downloads
        {isMobile &&
          <span style={{
            marginLeft: 14,
            fontSize: 26,
            display: "inline-block",
            transform: collapsed ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform .2s",
            color: "#22376d"
          }}>▶</span>
        }
      </div>
      {!isMobile || !collapsed ? (
        <>
          <div style={{
            ...styles.subhead,
            fontSize: isMobile ? "1rem" : "1.15rem",
            marginBottom: isMobile ? 20 : 46
          }}>
            Access previous year papers, syllabus, forms, and other essential resources<br /> for your preparation
          </div>
          <div style={{
            ...styles.flexTopBoxes,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 18 : 32,
            padding: isMobile ? "0 2vw" : 0,
            alignItems: "center"
          }}>
            <div style={{
              ...styles.topCardBox,
              width: isMobile ? "90vw" : 340,
              padding: isMobile ? "14px 8px 6px 8px" : "22px 25px 9px 25px"
            }}>
              <div style={styles.boxHead}>Previous Year Papers</div>
              <DownloadItem title="Civil Services Preliminary 2023" sub="PDF • 2.4 MB" link="#" isMobile={isMobile} />
              <DownloadItem title="Engineering Services 2023" sub="PDF • 1.8 MB" link="#" isMobile={isMobile} />
              <DownloadItem title="Indian Forest Service 2023" sub="PDF • 1.2 MB" link="#" isMobile={isMobile} />
            </div>
            <div style={{
              ...styles.topCardBox,
              width: isMobile ? "90vw" : 340,
              padding: isMobile ? "14px 8px 6px 8px" : "22px 25px 9px 25px"
            }}>
              <div style={styles.boxHead}>Syllabus & Guidelines</div>
              <DownloadItem title="Civil Services Examination Syllabus" sub="PDF • 890 KB" link="#" isMobile={isMobile} />
              <DownloadItem title="Combined Medical Services Guidelines" sub="PDF • 650 KB" link="#" isMobile={isMobile} />
              <DownloadItem title="Indian Economic Service Syllabus" sub="PDF • 720 KB" link="#" isMobile={isMobile} />
            </div>
            <div style={{
              ...styles.topCardBox,
              width: isMobile ? "90vw" : 340,
              padding: isMobile ? "14px 8px 6px 8px" : "22px 25px 9px 25px"
            }}>
              <div style={styles.boxHead}>Application Forms</div>
              <DownloadItem title="Online Application Form" sub="Web • Online" link="#" isMobile={isMobile} />
              <DownloadItem title="Disability Certificate Form" sub="PDF • 340 KB" link="#" isMobile={isMobile} />
              <DownloadItem title="Category Certificate Format" sub="PDF • 280 KB" link="#" isMobile={isMobile} />
            </div>
          </div>
          <div style={{
            ...styles.flexBottomBoxes,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 18 : 32,
            padding: isMobile ? "0 2vw" : 0,
            alignItems: "center"
          }}>
            <ResourceCard icon={calendarIcon} title="Examination Calendar" desc="Annual calendar of all UPSC examinations" link="#" isMobile={isMobile} />
            <ResourceCard icon={faqIcon} title="FAQ Section" desc="Frequently asked questions and answers" link="#" isMobile={isMobile} />
            <ResourceCard icon={contactIcon} title="Contact Officers" desc="Regional and sectional officer contact details" link="#" isMobile={isMobile} />
          </div>
        </>
      ) : null}
    </section>
  );
}

const styles = {
  bg: {
    background: "#fff",
    padding: "42px 0 46px 0"
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: "2.6rem",
    color: "#232d34",
    textAlign: "center",
    marginBottom: 8
  },
  subhead: {
    textAlign: "center",
    fontFamily: 'Inter, sans-serif',
    fontSize: "1.15rem",
    color: "#6e7fa7",
    marginBottom: 46
  },
  flexTopBoxes: {
    display: "flex",
    gap: 32,
    maxWidth: 1200,
    margin: "32px auto 0 auto",
    justifyContent: "center"
  },
  topCardBox: {
    background: "#fff",
    borderRadius: 21,
    boxShadow: "0 4px 26px #22376d0d",
    border: "1px solid #edeef0",
    padding: "22px 25px 9px 25px",
    width: 340,
    minHeight: 208,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  boxHead: {
    fontWeight: 600,
    fontSize: "1.16rem",
    color: "#1e2530",
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: 10,
    letterSpacing: ".02em"
  },
  downloadRow: {
    background: "#f9fafb",
    border: "1.2px solid #edeef0",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    padding: "13px 18px 10px 16px",
    marginBottom: 12,
    textDecoration: "none",
    color: "inherit",
    transition: "box-shadow .18s, border-color .19s",
    cursor: "pointer",
    fontFamily: 'Inter, sans-serif',
  },
  dTitle: {
    fontWeight: 500,
    fontSize: "1.07em",
    color: "#22376d",
    marginBottom: 4
  },
  dSub: {
    fontSize: ".98em",
    fontWeight: 400,
    color: "#6d758f"
  },
  dIcon: {
    marginLeft: 12,
    opacity: .83
  },
  flexBottomBoxes: {
    display: "flex",
    gap: 32,
    maxWidth: 1050,
    margin: "48px auto 0 auto",
    justifyContent: "center"
  },
  resourceCard: {
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 4px 24px #22376d12",
    border: "1px solid #edeef0",
    padding: "40px 26px 28px 26px",
    width: 304,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  rIcon: {
    marginBottom: 14
  },
  rTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 650,
    fontSize: "1.18rem",
    color: "#22376d",
    marginBottom: 6
  },
  rDesc: {
    fontFamily: 'Inter, sans-serif',
    color: "#7d819b",
    fontWeight: 400,
    fontSize: ".99rem",
    textAlign: "center",
    marginBottom: 22
  },
  rBtn: {
    background: "#f9fafb",
    border: "1.2px solid #edeef0",
    color: "#22376d",
    borderRadius: 9,
    padding: "10px 15px",
    fontWeight: 700,
    fontFamily: 'Inter, sans-serif',
    fontSize: ".99em",
    display: "flex",
    alignItems: "center",
    gap: 6,
    textDecoration: "none",
    marginTop: "auto",
    transition: "background .16s, border-color .16s"
  },
  rBtnIcon: {
    display: "inline-block"
  }
};
