import React, { useState } from "react";

// Responsive hook for demo
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 800);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const pages = [
  { name: "Home", path: "#" },
  { name: "Notifications", path: "#" },
  { name: "Exam Schedule", path: "#" },
  { name: "Results", path: "#" },
  { name: "Resources", path: "#" },
  { name: "Contact", path: "#" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      width: "100vw",
      maxWidth: "100vw",
      background: "#fff",
      borderBottom: "1.5px solid #eceef1",
      padding: isMobile ? "0 3vw" : "0 36px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxSizing: "border-box",
      minHeight: 64
    }}>
      <div style={{
        display: "flex",
        justifyContent: isMobile ? "space-between" : "flex-start",
        alignItems: isMobile ? "center" : "flex-end",
        minHeight: 64
      }}>
        {/* Logo + Subtitle */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          minWidth: 120,
          marginRight: 24
        }}>
          <span style={{fontWeight:700, fontSize: isMobile ? 21 : 28, color:"#23376B", fontFamily:"Montserrat", letterSpacing:".5px"}}>
            UPSC Portal
          </span>
          <span style={{fontWeight:400, fontSize: isMobile ? 11 : 13, color:"#6f82a4", lineHeight:1.1}}>
            Union Public Service Commission
          </span>
        </div>

        {/* Hamburger menu for mobile */}
        {isMobile && (
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(v => !v)}
            style={{
              background: "none",
              border: "none",
              fontSize: 32,
              cursor: "pointer",
              padding: "0 8px"
            }}
          >
            <span style={{display:"block"}}>{menuOpen ? "✕" : "☰"}</span>
          </button>
        )}
      </div>

      {/* Navigation links */}
      {/* Desktop: visible and centered row; Mobile: overlayed vertical menu */}
      {(menuOpen || !isMobile) && (
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: isMobile ? 14 : 34,
          background: isMobile ? "#fff" : "transparent",
          width: isMobile ? "100%" : "auto",
          position: isMobile ? "absolute" : "static",
          left: 0,
          right: 0,
          boxShadow: isMobile ? "0 6px 20px #7892ba12" : "",
          zIndex: 101,
          margin: isMobile ? "8px 0 0 0" : "0",
          padding: isMobile ? "18px 0 12px 0" : "0"
        }}>
          {pages.map((page, idx) => (
            <a key={idx} href={page.path} style={{
              textDecoration: "none",
              color: "#23376B",
              fontWeight: isMobile ? 600 : 500,
              fontSize: isMobile ? 19 : 19,
              fontFamily:'Inter, sans-serif',
              letterSpacing: isMobile ? 0.25 : 0,
              padding: isMobile ? "8px 0" : "3px 10px",
              borderRadius: 7,
              textAlign: "center",
              width: isMobile ? "100%" : "auto",
              transition: "background .17s"
            }}
            onClick={()=> isMobile && setMenuOpen(false)}>
              {page.name}
            </a>
          ))}
        </div>
      )}

      {/* Optionally put your search, notification, or profile area below or right of links */}
    </nav>
  );
}
