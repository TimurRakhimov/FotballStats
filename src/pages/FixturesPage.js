import React, { useState, useEffect } from "react";
import { fetchFixtures } from "../features/fixtures/fixturesAPI";
import './FixturesPage.css';

const FixturesPage = () => {
    const [fixturesInfo, setFixturesInfo] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchFixtures();
                setFixturesInfo(response.matches || []);
            } catch (error) {
                console.error("Error fetching fixtures:", error);
            }
        };
        getData();
    }, []);

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };

    if (!fixturesInfo.length)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Fixtures...</p>
            </div>
        );

    return (
        <div className="fixtures-page">
                <div className="fixtures-container">
                    <h1 className="page-title">Fixtures</h1>
                </div>
            {fixturesInfo.map((match) => (
                <div key={match.id} className="fixture-card">
                    <div className="fixture-date">
                        {new Date(match.utcDate).toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                        })} 
                    </div>
                    <div className="fixture-details">
                        <div className="teams">
                            <div className="team">
                                <img src={match.homeTeam.crestUrl} alt={match.homeTeam.name} className="team-logo" />
                                <span>{match.homeTeam.name}</span>
                            </div>
                            <div className="score">
                                {match.score.fullTime.home !== null ? (
                                    <>
                                        <span>{match.score.fullTime.home}</span>
                                        <span> - </span>
                                        <span>{match.score.fullTime.away}</span>
                                    </>
                                ) : (
                                    <span>-</span>
                                )}
                            </div>
                            <div className="team">
                                <img src={match.awayTeam.crestUrl} alt={match.awayTeam.name} className="team-logo" />
                                <span>{match.awayTeam.name}</span>
                            </div>
                        </div>
                        <div className="competition-logo">
                            <img src={match.competition.area.ensignUrl} alt={match.competition.name} />
                        </div>
                    </div>
                    <div className="dropdown-toggle-container">
                        <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown(match.id)}
                        >
                            {openDropdown === match.id ? "Hide Details" : "Show Details"}
                        </button>
                    </div>
                    {openDropdown === match.id && (
                        <div className="dropdown-content">
                            <p><strong>Referee:</strong> {match.referees?.[0]?.name || "TBD"}</p>
                            <p><strong>Venue:</strong> {match.venue || "TBD"}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FixturesPage;
