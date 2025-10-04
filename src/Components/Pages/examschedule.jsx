import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

const examData = [
  {
    name: "Civil Services Preliminary Exam",
    date: "June 18, 2025",
    applicationDeadline: "March 15, 2025",
    admitCard: "Available from May 25, 2025",
    status: "Upcoming"
  },
  {
    name: "Indian Forest Service Main Exam",
    date: "July 10, 2025",
    applicationDeadline: "March 20, 2025",
    admitCard: "Available from June 15, 2025",
    status: "Upcoming"
  },
  {
    name: "Engineering Services Main Exam",
    date: "January 5, 2025",
    applicationDeadline: "October 15, 2024",
    admitCard: "Available from Dec 15, 2024",
    status: "Completed"
  },
  {
    name: "Combined Medical Services",
    date: "August 22, 2025",
    applicationDeadline: "April 10, 2025",
    admitCard: "Coming Soon",
    status: "Upcoming"
  },
  {
    name: "CDS I (OTA) Exam",
    date: "May 2, 2025",
    applicationDeadline: "January 11, 2025",
    admitCard: "Available from April 1, 2025",
    status: "Upcoming"
  },
  {
    name: "NDA II Exam",
    date: "April 30, 2025",
    applicationDeadline: "December 30, 2024",
    admitCard: "Coming Soon",
    status: "Upcoming"
  },
  {
    name: "Indian Economic Service Exam",
    date: "November 7, 2025",
    applicationDeadline: "August 12, 2025",
    admitCard: "Coming Soon",
    status: "Upcoming"
  },
  {
    name: "Combined Geo-Scientist Main Exam",
    date: "June 21, 2025",
    applicationDeadline: "March 26, 2025",
    admitCard: "Available from June 1, 2025",
    status: "Upcoming"
  },
  {
    name: "IES/ISS Exam",
    date: "September 18, 2025",
    applicationDeadline: "June 29, 2025",
    admitCard: "Coming Soon",
    status: "Upcoming"
  },
  {
    name: "Combined Defence Services II",
    date: "July 13, 2025",
    applicationDeadline: "March 19, 2025",
    admitCard: "Available from June 15, 2025",
    status: "Upcoming"
  }
];

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export default function ExamSchedulePage() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      background: "#f6f8fc",
      minHeight: "100vh",
      padding: isMobile ? "20px 2vw" : "50px 6vw"
    }}>
      <h1 style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: isMobile ? "1.38rem" : "2.3rem",
        color: "#12345a",
        marginBottom: 18,
        textAlign: isMobile ? "center" : "left"
      }}>
        Exam Schedule
      </h1>
      <div style={{
        overflowX: "auto",
        background: "#fff",
        boxShadow: "0 3px 24px #22376d10",
        borderRadius: 14,
        padding: isMobile ? "0" : "18px"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 360,
          fontFamily: "Inter, sans-serif"
        }}>
          <thead>
            <tr style={{background: "#f5f7fd"}}>
              <th style={thStyle}>Exam Name</th>
              <th style={thStyle}>Exam Date</th>
              <th style={thStyle}>Application Deadline</th>
              <th style={thStyle}>Admit Card</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, i) => (
              <tr key={i} style={{
                borderBottom: "1px solid #f0f2f7"
              }}>
                <td style={tdStyle}>{exam.name}</td>
                <td style={tdStyle}>{exam.date}</td>
                <td style={tdStyle}>{exam.applicationDeadline}</td>
                <td style={tdStyle}>{exam.admitCard}</td>
                <td style={{
                  ...tdStyle,
                  fontWeight: 600,
                  color:
                    exam.status === "Upcoming"
                      ? "#2368ca"
                      : exam.status === "Completed"
                      ? "#b6b6b6"
                      : "#caa700"
                }}>
                  {exam.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const thStyle = {
  textAlign: "left",
  fontWeight: 700,
  color: "#324473",
  fontSize: "1.06rem",
  padding: "13px 10px",
  borderBottom: "2.5px solid #e7e8ee"
};
const tdStyle = {
  padding: "13px 10px",
  fontWeight: 500,
  fontSize: ".99rem",
  color: "#23376d"
};
