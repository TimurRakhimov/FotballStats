import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlayersPage from "../pages/PlayersPage";
import FixturesPage from "../pages/FixturesPage";
import StandingsPage from "../pages/StandingsPage";
import StatisticsPage from "../pages/StatisticsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/standings" element={<StandingsPage />} />
            <Route path="/fixtures" element={<FixturesPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
    );
};

export default AppRoutes;
