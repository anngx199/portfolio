import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="text-white text-center p-5"
            style={{
                backgroundImage: "url('img/contact.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingTop: "100px",
                paddingBottom: "100px",
            }}
        >
            <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem" }} data-aos="fade-down">
                CONTACT ME
            </h2>

            <div className="mt-4" data-aos="fade-up">
                <p>
                    <FaEnvelope />{" "}
                    <strong>Email:</strong>{" "}
                    <a href="mailto:andj190902@gmail.com" className="text-info">
                        andj190902@gmail.com
                    </a>
                </p>
                <p>
                    <FaPhone /> <strong>Phone:</strong> 020 4008 7168
                </p>
                <p>
                    <FaMapMarkerAlt /> <strong>Location:</strong> Auckland, New Zealand
                </p>
                <p>
                    <FaGithub />{" "}
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/anngx199"
                        className="text-info"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/anngx199
                    </a>
                </p>
                <p>
                    <FaLinkedin />{" "}
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/an-nguyen-7bb365293"
                        className="text-info"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/an-nguyen
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
