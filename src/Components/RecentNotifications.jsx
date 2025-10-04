import React from "react";

const notifications = [
  {
    date: "2024-01-15",
    title: "Civil Services Examination 2024 - Preliminary Result",
    tags: ["Result", "Urgent"],
    urgent: true
  },
  {
    date: "2024-01-12",
    title: "Combined Medical Services Examination 2024 - Registration Open",
    tags: ["Registration"],
    urgent: false
  },
  {
    date: "2024-01-10",
    title: "Engineering Services Examination 2024 - Admit Card Available",
    tags: ["Admit Card"],
    urgent: false
  },
  {
    date: "2024-01-08",
    title: "Indian Forest Service Examination 2024 - Syllabus Updated",
    tags: ["Update"],
    urgent: false
  },
];

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

function Tag({ text, color, isMobile }) {
  return (
    <span style={{
      display: 'inline-block',
      background: color || '#f7f7fc',
      color: color === '#be3847' ? '#fff' : '#22376d',
      fontWeight: 600,
      fontSize: isMobile ? 12 : 14,
      padding: isMobile ? '2px 10px' : '2px 14px',
      borderRadius: 18,
      marginLeft: isMobile ? 6 : 10,
      marginRight: isMobile ? 4 : 6
    }}>{text}</span>
  );
}

function NotificationCard({ date, title, tags, urgent, isMobile }) {
  return (
    <div
      style={{
        ...styles.card,
        border: urgent ? '1.7px solid #ea9a9a' : '1.5px solid #d9dcea',
        background: urgent ? '#faf2f2' : '#f7f8fb',
        padding: isMobile ? "12px 8px 10px 8px" : "16px 22px 13px 22px",
        fontSize: isMobile ? 14 : 16
      }}
    >
      <div style={urgent ? { ...styles.title, color: '#ca5051', fontWeight: 700, fontSize: isMobile ? 15 : '1.07em' } : { ...styles.title, fontSize: isMobile ? 15 : '1.07em' }}>
        {title}
        {tags.includes('Urgent') && <Tag text="Urgent" color="#be3847" isMobile={isMobile} />}
      </div>
      <div style={{
        ...styles.bottomRow,
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? 4 : 6
      }}>
        <span style={{
          ...styles.date,
          fontSize: isMobile ? 12 : 14,
          padding: isMobile ? "2px 8px" : "3px 14px"
        }}>{date}</span>
        {tags
          .filter(t => t !== 'Urgent')
          .map(t => (
            <Tag key={t} text={t} isMobile={isMobile} />
        ))}
      </div>
    </div>
  )
}

export default function RecentNotifications() {
  const isMobile = useIsMobile();

  return (
    <div style={{
      ...styles.section,
      padding: isMobile ? "18px 6vw 14px 6vw" : "35px 32px 30px 32px"
    }}>
      <div style={{
        ...styles.heading,
        fontSize: isMobile ? "1.2rem" : "2rem"
      }}>Recent Notifications</div>
      <div style={{
        ...styles.subhead,
        fontSize: isMobile ? "0.98rem" : "1.09rem",
        marginBottom: isMobile ? 14 : 25
      }}>Stay updated with the latest announcements</div>
      <div>
        {notifications.map((n, idx) => (
          <NotificationCard {...n} key={idx} isMobile={isMobile} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  section: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px #22376d14',
    padding: '35px 32px 30px 32px',
    marginTop: 16
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    color: '#212d3d',
    marginBottom: 3
  },
  subhead: {
    color: '#6d7993',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.09rem',
    marginBottom: 25
  },
  card: {
    borderRadius: 13,
    border: '1.5px solid #d9dcea',
    background: '#f7f8fb',
    padding: '16px 22px 13px 22px',
    marginBottom: 18,
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: '#353c4a',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 600,
    fontSize: '1.07em',
    marginBottom: 10
  },
  bottomRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  date: {
    color: '#22376d',
    fontWeight: 600,
    background: '#f0f3fa',
    padding: '3px 14px',
    borderRadius: 13,
    fontSize: 14
  }
};
