import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  { name: "Home", path: "/" },
  { name: "Notifications", path: "/notifications" },
  { name: "Exam Schedule", path: "/examschedule" },
  { name: "Results", path: "UPSC/results" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" }
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
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxSizing: "border-box",
      minHeight: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile ? "0 18px" : "0 36px",
    }}>
      {/* Left: Logo and subtitle */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        minWidth: 120,
        marginRight: 28,
        justifyContent: "center",
      }}>
        <span style={{
          fontWeight: 700,
          fontSize: isMobile ? 21 : 28,
          color: "#23376B",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: ".5px",
        }}>
          UPSC Portal
        </span>
        <span style={{
          fontWeight: 400,
          fontSize: isMobile ? 11 : 13,
          color: "#6f82a4",
          lineHeight: 1.1
        }}>
          Union Public Service Commission
        </span>
      </div>

      {/* Desktop: Horizontal nav links in same row */}
      {!isMobile && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
          fontFamily: "Inter, sans-serif",
        }}>
          {pages.map((page, idx) => (
            <a key={idx} href={page.path} style={{
              textDecoration: "none",
              color: "#23376B",
              fontWeight: 500,
              fontSize: 19,
              borderRadius: 6,
              padding: "7px 12px",
              transition: "background .16s"
            }}>
              {page.name}
            </a>
          ))}
        </div>
      )}

      {/* Mobile: Hamburger, dropdown menu */}
      {isMobile && (
        <>
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{
              background: "none",
              border: "none",
              fontSize: 28,
              cursor: "pointer",
              marginLeft: 12
            }}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          {menuOpen && (
            <div style={{
              position: "absolute",
              top: 64,
              left: 0,
              right: 0,
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              padding: "12px 24px",
              gap: 16,
              zIndex: 101
            }}>
              {pages.map((page, idx) => (
                <a key={idx} href={page.path} style={{
                  textDecoration: "none",
                  color: "#23376B",
                  fontWeight: 600,
                  fontSize: 20,
                  padding: "8px",
                  borderRadius: 6,
                  cursor: "pointer"
                }} onClick={() => setMenuOpen(false)}>
                  {page.name}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
}
