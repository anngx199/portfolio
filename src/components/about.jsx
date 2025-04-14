import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./about.css"; // Custom styles here

export const About = () => {
    const leftItems = [
        "Proficient in Flutter & Firebase",
        "Strong UI/UX mobile design skills",
        "Experience with full app lifecycle",
        "Commercial projects via SourceInfinity",
    ];

    const rightItems = [
        "Background in Network & Security",
        "4+ years in hospitality industry",
        "Adaptable and collaborative",
        "Always eager to learn",
    ];

    return (
        <div id="about" className="text-center about-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Image */}
                    <div
                        className="col-xs-12 col-md-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <img
                            src="img/about.jpg"
                            className="img-responsive"
                            alt="About"
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                marginBottom: "20px",
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div
                        className="col-xs-12 col-md-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="section-title">
                            <h2 className="typing-title">ABOUT ME</h2>
                        </div>

                        <p className="about-paragraph">
                            Hi, I’m <strong>Nguyen Van An</strong>, a Junior Mobile App Developer
                            passionate about building smooth, responsive, and functional user
                            experiences on mobile platforms. I specialize in <strong>Flutter</strong> and{" "}
                            <strong>Firebase</strong>, and I enjoy turning ideas into mobile
                            solutions that help real people. With a background in{" "}
                            <strong>Network & Security</strong> and experience working on
                            commercial projects with <strong>SourceInfinity</strong>, I am focused,
                            adaptable, and committed to quality.
                        </p>

                        <h3 style={{ marginBottom: "20px" }}>Why Choose Me?</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="tick-list">
                                    {leftItems.map((text, i) => (
                                        <li className="tick-item animate-tick" key={i} style={{ "--i": i }}>
                                            <FaCheckCircle className="tick-icon" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="tick-list">
                                    {rightItems.map((text, i) => (
                                        <li className="tick-item animate-tick" key={i} style={{ "--i": i }}>
                                            <FaCheckCircle className="tick-icon" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
