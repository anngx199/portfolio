import React from "react";
import {
    FaTools,
    FaCogs,
    FaBriefcase,
    FaUsers,
    FaCode,
} from "react-icons/fa";
import "./features.css"; // ✅ we'll create this next

const features = [
    {
        icon: <FaTools />,
        text: (
            <>
                Proficiency in <strong>Flutter, Dart, Firebase</strong>, and{" "}
                <strong>Google APIs</strong>
            </>
        ),
    },
    {
        icon: <FaCogs />,
        text:
            "Experience with full app lifecycle: design, development, testing, deployment",
    },
    {
        icon: <FaBriefcase />,
        text: (
            <>
                Real-world development experience via{" "}
                <strong>SourceInfinity</strong>
            </>
        ),
    },
    {
        icon: <FaUsers />,
        text:
            "Strong communication and collaboration skills from 4+ years in hospitality",
    },
    {
        icon: <FaCode />,
        text:
            "Passion for clean code, scalable architecture, and engaging mobile UI",
    },
];

const Features = () => {
    return (
        <div id="features" className="text-center" style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <div className="section-title">
                    <h2>What I Bring</h2>
                    <p style={{ marginBottom: "10px" }}>
                        I bring a well-rounded skill set from both technical development and real-world teamwork experience. Here's what I can offer:
                    </p>
                </div>

                <div
                    className="features-grid"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="80"
                >
                    {features.map((item, index) => (
                        <div className="feature-item" key={index}>
                            <div className="icon">{item.icon}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
