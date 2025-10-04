import React from "react";

const LatestUpdates = () => {
  return (
    <section style={styles.updatesSection}>
      <h2>Latest Updates</h2>
      <div style={styles.updateItem}>
        <span style={styles.newTag}>NEW</span>
        <strong>Civil Services (Main) Examination 2024 - Results Declared</strong>
        <span> - March 25, 2025</span>
      </div>
    </section>
  );
};

const styles = {
  updatesSection: {
    maxWidth: "900px",
    padding: "40px",
    margin: "auto",
  },
  updateItem: {
    backgroundColor: "#fff",
    padding: "15px 20px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgb(0 0 0 / 0.05)",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    cursor: "pointer",
  },
  newTag: {
    fontSize: "0.75rem",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ff8033",
    borderRadius: "6px",
    padding: "2px 10px",
  },
};

export default LatestUpdates;
