import "./projects.css";
import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="text-center p-5" style={{ backgroundColor: "#fff" }}>
            <h2>My Projects</h2>
            <div className="container mt-4">
                {/* Fix Finder Project */}
                <div className="mb-5">
                    <img
                        src="img/fixfinder.png"
                        alt="FixFinder"
                        style={{
                            width: "300px",
                            height: "auto",
                            objectFit: "contain",
                            marginBottom: "20px",
                        }}
                    />
                    <h4>Fix Finder</h4>
                    <p>
                        FixFinder is a mobile app that helps users locate nearby technicians for urgent home repairs.
                        It features real-time location matching and secure appointment booking using Google Maps API.
                        Built with Flutter and Firebase, the app ensures seamless service access across devices.{" "}
                        <strong>Developed at Source Infinity</strong>.
                    </p>
                </div>

                {/* Sport Hub Project */}
                <div>
                    <img
                        src="img/sporthub.png"
                        alt="Sport Hub"
                        style={{
                            width: "300px",
                            height: "auto",
                            objectFit: "contain",
                            marginBottom: "20px",
                        }}
                    />
                    <h4>Sport Hub</h4>
                    <p>
                        Sport Hub is a community-driven mobile app where users can create teams, book venues, and chat in real-time.
                        Designed with role-based access and Flutter + Firestore for robust back-end performance and a polished user experience.{" "}
                        <strong>Developed at Source Infinity</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
