import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AutoCounter from "./AutoCounter.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Welcome 😊</h1>
              <p>Click the button below to go to the Auto Counter page</p>
              
              <Link to="/autocount">
                <button 
                  style={{
                    padding: "12px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "8px"
                  }}
                >
                  Go to Auto Counter 🚀
                </button>
              </Link>
            </div>
          } 
        />

        {/* Auto Counter Route */}
        <Route path="/autocount" element={<AutoCounter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
