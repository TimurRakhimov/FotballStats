import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app-layout">
                <Header />
                <div className="content-wrapper">
                    <main className="main-content">
                        <AppRoutes />
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
