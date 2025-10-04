import React, { useState } from "react";

// Example results data
const resultsData = [
  { title: "Civil Services (Preliminary) 2025", type: "Final Result", date: "July 15, 2025", link: "#" },
  { title: "Indian Forest Service 2024", type: "Final Result", date: "March 28, 2025", link: "#" },
  { title: "Engineering Services 2025", type: "Written Result", date: "August 20, 2025", link: "#" },
  { title: "Combined Medical Services 2024", type: "Final Result", date: "Sept 16, 2024", link: "#" },
  { title: "CMS 2024 (Interview)", type: "DME Result", date: "Feb 05, 2025", link: "#" },
  { title: "CDS I (OTA) Result 2025", type: "Final Result", date: "May 19, 2025", link: "#" },
  { title: "NDA II Result 2025", type: "Written Result", date: "April 12, 2025", link: "#" },
  { title: "Indian Economic Service 2024", type: "Final Result", date: "Nov 23, 2024", link: "#" },
  { title: "Combined Geo-Scientist 2025", type: "Main Result", date: "June 10, 2025", link: "#" },
  { title: "Combined Defence Services II 2024", type: "Written Result", date: "Jan 25, 2025", link: "#" },
  { title: "IES/ISS 2024", type: "Final Result", date: "Sept 2, 2024", link: "#" }
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export default function ResultsPage() {
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  const filteredResults = resultsData.filter(r =>
    r.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <section style={{
      background: "#f6f8fa",
      minHeight: "100vh",
      padding: isMobile ? "18px 0px 32px 0px" : "52px 40px"
    }}>
      <h1 style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: isMobile ? "1.16rem" : "2.3rem",
        color: "#172346",
        marginBottom: 18,
        textAlign: isMobile ? "left" : "start",
        paddingLeft: isMobile ? 16 : 0
      }}>Exam & Recruitment Results</h1>

      {/* Search Bar */}
      <div style={{
        display: "flex",
        gap: 9,
        marginBottom: 28,
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        paddingLeft: isMobile ? 16 : 0,
        paddingRight: isMobile ? 16 : 0
      }}>
        <input
          type="text"
          value={input}
          placeholder="Search by result title…"
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") setSearch(input); }}
          style={{
            padding: isMobile ? "9px" : "15px 24px",
            border: "1.5px solid #c6d2ef",
            borderRadius: 10,
            width: isMobile ? "100%" : 304,
            fontSize: isMobile ? "1rem" : "1.13rem",
            outline: "none",
            marginBottom: isMobile ? 8 : 0,
          }}
        />
        <button onClick={() => setSearch(input)}
          style={{
            background: "#23376d",
            color: "#fff",
            fontWeight: 600,
            border: "none",
            borderRadius: 8,
            padding: isMobile ? "10px 17px" : "13px 27px",
            cursor: "pointer",
            fontSize: isMobile ? "1rem" : "1.13rem",
            boxShadow: "0 2px 8px #22487d1c"
          }}>
          Search
        </button>
      </div>

      {/* No result found */}
      {filteredResults.length === 0 && (
        <div style={{
          background: "#fff7f7",
          color: "#b22135",
          borderRadius: 12,
          padding: "30px 16px",
          fontWeight: 500,
          marginTop: 40,
          textAlign: "center"
        }}>No results found for &quot;{search}&quot;.</div>
      )}

      {/* Cards */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        gap: isMobile ? 16 : 30,
        justifyContent: isMobile ? "center" : "flex-start",
        alignItems: isMobile ? "stretch" : "flex-start",
        paddingLeft: isMobile ? 8 : 0,
        paddingRight: isMobile ? 8 : 0
      }}>
        {filteredResults.map((res, idx) => (
          <div key={idx}
            style={{
              background: "#fff",
              border: "1.2px solid #e3eaf2",
              borderRadius: 14,
              width: isMobile ? "98vw" : 340,
              maxWidth: 360,
              boxSizing: "border-box",
              padding: isMobile ? "14px 8px 13px 14px" : "32px 28px 22px 32px",
              boxShadow: "0 3px 12px #12316e0d",
              margin: isMobile ? "0 auto" : undefined,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              minWidth: isMobile ? 0 : 290
            }}>
            <div style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? ".98rem" : "1.11rem",
              color: "#1c2951",
              marginBottom: 1
            }}>{res.title}</div>
            <div style={{
              fontWeight: 500,
              color: "#29579d",
              fontSize: isMobile ? ".91rem" : "1rem",
              marginBottom: 2
            }}>{res.type}</div>
            <div style={{
              color: "#7c858b",
              fontSize: ".94rem",
              marginBottom: 6
            }}>Published: {res.date}</div>
            <a href={res.link} download
               style={{
                 background: "#f6f9fd",
                 color: "#264dcc",
                 borderRadius: 6,
                 alignSelf: "flex-start",
                 fontWeight: 600,
                 padding: "7px 13px",
                 fontSize: ".95rem",
                 boxShadow: "0 1px 7px #3e82c412",
                 textDecoration: "none",
                 border: "1.2px solid #e0e6f7",
                 marginTop: 8,
                 transition: "background .15s"
               }}>Download PDF</a>
          </div>
        ))}
      </div>
    </section>
  );
}
