import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header
            className="hero-section"
            style={{
                backgroundImage: "url('/img/intro-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <h1 className="wave-header">
                {"Hi, my name is An Nguyen".split("").map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.07}s` }}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>

            <p
                className="fade-slide subtitle-text"
                style={{ animationDelay: "0.5s" }}
            >
                I design & build mobile apps with Flutter, APIs & UI/UX focus
            </p>

            <a href="#about" className="explore-button">
                Explore Me
            </a>
        </header>
    );
};

export default Header;
