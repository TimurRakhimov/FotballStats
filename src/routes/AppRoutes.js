import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlayersPage from "../pages/PlayersPage";
import TeamsPage from "../pages/TeamsPage";
import FixturesPage from "../pages/FixturesPage";
import CupsPage from "../pages/CupsPage";
import NationalTeamsPage from "../pages/NationalTeamsPage";
import CoachesPage from "../pages/CoachesPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/fixtures" element={<FixturesPage />} />
            <Route path="/cups" element={<CupsPage />} />
            <Route path="/nationalTeams" element={<NationalTeamsPage />} />
            <Route path="/coaches" element={<CoachesPage />} />
        </Routes>
    );
};

export default AppRoutes;
