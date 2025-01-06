import React, { useState, useEffect } from "react";
import { fetchFixtures } from "../features/fixtures/fixturesAPI";
import './FixturesPage.css';

const FixturesPage = () => {
    const [fixturesInfo, setFixturesInfo] = useState([]);

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

    if (!fixturesInfo.length)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Fixtures...</p>
            </div>
        );

    return (
        <div className="fixtures-page">
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
                                <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="team-logo" />
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
                                <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="team-logo" />
                                <span>{match.awayTeam.name}</span>
                            </div>
                        </div>
                        <div className="competition-logo">
                            <img src={match.competition.emblem} alt={match.competition.name} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FixturesPage;
