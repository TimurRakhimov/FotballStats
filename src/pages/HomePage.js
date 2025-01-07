import React from "react";
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <img
                    src={`${process.env.PUBLIC_URL}/main.jpeg`} // Placeholder for team photo
                    alt="Real Madrid Stadium"
                    className="hero-image"
                />
                <div className="hero-text">
                    <h1 className="team-name">Real Madrid CF</h1>
                    <p className="team-motto">"The Greatest Club in Football History"</p>
                </div>
            </div>
            <div className="content-section">
                <div className="facts-and-logo">
                    <div className="team-logo-container">
                        <img
                            src={`${process.env.PUBLIC_URL}/og-logo.jpeg`} // Placeholder for team logo
                            alt="Team Logo"
                            className="home-team-logo"
                        />
                    </div>
                    <div className="facts-section">
                        <h2>Historical Facts</h2>
                        <ul>
                            <li>Founded in 1902 in Madrid, Spain.</li>
                            <li>Home stadium: Santiago Bernabéu Stadium.</li>
                            <li>Most UEFA Champions League titles: 15.</li>
                            <li>Iconic players: Alfredo Di Stéfano, Cristiano Ronaldo, Raul, and many more.</li>
                        </ul>
                    </div>
                </div>
                <div className="photo-gallery">
                    <h2>Gallery</h2>
                    <div className="photo-grid">
                        <img
                            src={`${process.env.PUBLIC_URL}/cl1.avif`}
                            alt="Historical Moment 1"
                            className="gallery-photo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/cl2.jpg`}
                            alt="Historical Moment 2"
                            className="gallery-photo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/cl3.jpeg`}
                            alt="Historical Moment 3"
                            className="gallery-photo"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/cl4.jpg`}
                            alt="Historical Moment 4"
                            className="gallery-photo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
