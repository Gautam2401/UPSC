import React from "react";

// Simple icons using SVG or Unicode
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

function DownloadItem({ title, sub, link }) {
  return (
    <a href={link} style={styles.downloadRow}>
      <div>
        <div style={styles.dTitle}>{title}</div>
        <div style={styles.dSub}>{sub}</div>
      </div>
      <div style={styles.dIcon}>{downloadIcon}</div>
    </a>
  );
}

function ResourceCard({ icon, title, desc, link }) {
  return (
    <div style={styles.resourceCard}>
      <div style={styles.rIcon}>{icon}</div>
      <div style={styles.rTitle}>{title}</div>
      <div style={styles.rDesc}>{desc}</div>
      <a href={link} style={styles.rBtn}>
        Access Now <span style={styles.rBtnIcon}>{externalIcon}</span>
      </a>
    </div>
  );
}

export default function ResourcesDownloads() {
  return (
    <section style={styles.bg}>
      <div style={styles.heading}>Resources & Downloads</div>
      <div style={styles.subhead}>
        Access previous year papers, syllabus, forms, and other essential resources<br /> for your preparation
      </div>
      <div style={styles.flexTopBoxes}>
        {/* Previous Year Papers */}
        <div style={styles.topCardBox}>
          <div style={styles.boxHead}>Previous Year Papers</div>
          <DownloadItem
            title="Civil Services Preliminary 2023"
            sub="PDF • 2.4 MB"
            link="#"
          />
          <DownloadItem
            title="Engineering Services 2023"
            sub="PDF • 1.8 MB"
            link="#"
          />
          <DownloadItem
            title="Indian Forest Service 2023"
            sub="PDF • 1.2 MB"
            link="#"
          />
        </div>
        {/* Syllabus & Guidelines */}
        <div style={styles.topCardBox}>
          <div style={styles.boxHead}>Syllabus & Guidelines</div>
          <DownloadItem
            title="Civil Services Examination Syllabus"
            sub="PDF • 890 KB"
            link="#"
          />
          <DownloadItem
            title="Combined Medical Services Guidelines"
            sub="PDF • 650 KB"
            link="#"
          />
          <DownloadItem
            title="Indian Economic Service Syllabus"
            sub="PDF • 720 KB"
            link="#"
          />
        </div>
        {/* Application Forms */}
        <div style={styles.topCardBox}>
          <div style={styles.boxHead}>Application Forms</div>
          <DownloadItem
            title="Online Application Form"
            sub="Web • Online"
            link="#"
          />
          <DownloadItem
            title="Disability Certificate Form"
            sub="PDF • 340 KB"
            link="#"
          />
          <DownloadItem
            title="Category Certificate Format"
            sub="PDF • 280 KB"
            link="#"
          />
        </div>
      </div>
      <div style={styles.flexBottomBoxes}>
        <ResourceCard
          icon={calendarIcon}
          title="Examination Calendar"
          desc="Annual calendar of all UPSC examinations"
          link="#"
        />
        <ResourceCard
          icon={faqIcon}
          title="FAQ Section"
          desc="Frequently asked questions and answers"
          link="#"
        />
        <ResourceCard
          icon={contactIcon}
          title="Contact Officers"
          desc="Regional and sectional officer contact details"
          link="#"
        />
      </div>
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
