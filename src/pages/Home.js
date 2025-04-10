import React from "react";
import { useNavigate } from "react-router-dom";  // Navigation hook
import "../styles/Home.css";

// New Images above feature section
import extraImg1 from "../assets/eyetracking.jpeg";
import extraImg2 from "../assets/sounddetection.jpg";
import extraImg3 from "../assets/devicedetection.png";


const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/recommendation");  // Navigate to Recommendation page
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🚀 Examify: AI-Powered Online Proctoring</h1>
          <p>
            Revolutionizing online exams with AI-driven integrity checks, 
            including eye-tracking, sound detection, and device restriction.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <h2 className="section-title">✨ Our Key Features</h2>
        <div className="feature-grid">

          <div className="feature-box">
            <img src={extraImg1} alt="Eye Tracking" />
            <h3>AI Eye Tracking 👁️</h3>
            <p>Detects unusual eye movements and ensures screen focus during exams.</p>
          </div>

          <div className="feature-box">
            <img src={extraImg2} alt="Sound Detection" />
            <h3>Sound Detection 🎙️</h3>
            <p>Identifies background noises and suspicious sounds during tests.</p>
          </div>

          <div className="feature-box">
            <img src={extraImg3} alt="Device Restriction" />
            <h3>Device Restriction 📵</h3>
            <p>Prevents unauthorized device usage for fair assessments.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>🔒 Why Choose Examify?</h2>
        <p>
          Examify ensures fair online assessments with AI-driven security. 
          Designed for universities, certification providers, and corporate training.
        </p>
      </section>
    </div>
  );
};

export default Home;
