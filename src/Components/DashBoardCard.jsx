import React from "react";

const DashboardCard = ({ title, status, deadline, badge }) => {
  let badgeColor = "#999";
  if (badge === "Application Submitted") badgeColor = "#568dff";
  if (badge === "Admit Card Available") badgeColor = "#33a852";
  if (badge === "Payment Pending") badgeColor = "#ff5959";

  return (
    <div style={styles.card}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <div style={{ marginBottom: "10px" }}>
        <span>Status: </span>
        <span style={{ ...styles.badge, backgroundColor: badgeColor }}>{badge}</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span>Deadline: </span>
        <span>{deadline}</span>
      </div>
      <button style={styles.viewDetailsBtn}>View Details ➔</button>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    boxShadow: "0 4px 8px rgb(0 0 0 / 0.1)",
    borderRadius: "12px",
    width: "280px",
    background: "white",
    color: "#333",
    display: "flex",
    flexDirection: "column",
  },
  badge: {
    fontSize: "0.8rem",
    padding: "4px 10px",
    borderRadius: "12px",
    color: "white",
    fontWeight: "bold",
  },
  viewDetailsBtn: {
    marginTop: "auto",
    border: "none",
    backgroundColor: "#153e7e",
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default DashboardCard;
