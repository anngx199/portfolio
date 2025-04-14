import React from "react";
import { Image } from "./image";
import galleryData from "../data/galleryData";

export const Gallery = () => {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>
                        A quick look into the UI screens and designs of my mobile projects:
                        FixFinder and SportHub.
                    </p>
                </div>

                {/* FixFinder Section */}
                <div className="project-section">
                    <h3 className="text-center">FixFinder</h3>
                    <div className="row">
                        {galleryData.FixFinder.map((item, i) => (
                            <div key={`fix-${i}`} className="col-sm-6 col-md-4 col-lg-3">
                                <Image
                                    title={item.title}
                                    largeImage={item.largeImage}
                                    smallImage={item.smallImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SportHub Section */}
                <div className="project-section">
                    <h3 className="text-center">SportHub</h3>
                    <div className="row">
                        {galleryData.SportHub.map((item, i) => (
                            <div key={`sport-${i}`} className="col-sm-6 col-md-4 col-lg-3">
                                <Image
                                    title={item.title}
                                    largeImage={item.largeImage}
                                    smallImage={item.smallImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
