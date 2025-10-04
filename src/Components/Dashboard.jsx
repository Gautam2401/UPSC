import React from "react";
import DashBoardCard from "./DashBoardCard";

const Dashboard = () => {
  return (
    <section style={styles.dashboardSection}>
      <h2 style={{ marginLeft: "5vw" }}>My Dashboard</h2>
      <p style={{ marginLeft: "5vw", color: "#7c8797" }}>
        Track your applications and upcoming deadlines
      </p>
      <div style={styles.cardsContainer}>
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
    background: "#fafbfd",
    padding: "54px 0 24px 0",
  },
  dashboardHeader: {
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAllBtn: {
    background: "#192451",
    color: "#fff",
    fontWeight: 600,
    padding: "12px 32px",
    fontSize: "18px",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 2px 8px #0001",
    cursor: "pointer"
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    padding: "40px 64px 0 64px",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
  }
};


export default Dashboard;
