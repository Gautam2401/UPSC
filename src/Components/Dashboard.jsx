import React from "react";
import DashBoardCard from "./DashBoardCard";

// Responsive hook for adaptive layout
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{
      ...styles.dashboardSection,
      padding: isMobile ? "32px 0 12px 0" : "54px 0 24px 0"
    }}>
      <h2 style={{
        marginLeft: isMobile ? "4vw" : "5vw",
        fontSize: isMobile ? "1.5rem" : "2.2rem",
        marginBottom: isMobile ? 8 : 0,
        marginTop: 0
      }}>
        My Dashboard
      </h2>
      <p style={{
        marginLeft: isMobile ? "4vw" : "5vw",
        color: "#7c8797",
        fontSize: isMobile ? "1rem" : "1.15rem",
        marginBottom: isMobile ? 18 : 0
      }}>
        Track your applications and upcoming deadlines
      </p>
      <div
        style={{
          ...styles.cardsContainer,
          flexWrap: "wrap", // this is essential!
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "18px" : "32px",
          padding: isMobile ? "18px 4vw 0 4vw" : "40px 64px 0 64px",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <DashBoardCard
          title="Civil Services Examination 2025"
          status="Application Submitted"
          deadline="March 28, 2025"
          badge="Application Submitted"
        />
        <DashBoardCard
          title="Indian Forest Service Exam 2025"
          status="Admit Card Available"
          deadline="February 15, 2025"
          badge="Admit Card Available"
        />
        <DashBoardCard
          title="Combined Defence Services Exam"
          status="Payment Pending"
          deadline="April 10, 2025"
          badge="Payment Pending"
        />
      </div>
    </section>
  );
};

const styles = {
  dashboardSection: {
    width: "100vw",
    background: "#fafbfd"
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    transition: "all .2s"
  }
};

export default Dashboard;
