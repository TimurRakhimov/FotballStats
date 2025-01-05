import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <AppRoutes />
            </main>
        </Router>
    );
};

export default App;
