import "./styles/styles.css";
import "./styles/loginPage.css";
import React, { useEffect, useState } from "react";
import { BsBarChart } from "react-icons/bs";
import { BiError, BiChalkboard } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Routes, Route, Navigate, Outlet, useLocation  } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { SidenavProvider, SidenavContainer, SidenavItem, Sidenav } from './components/sidenav';
import { Navbar } from "./components/navbar/navbar";
import SettingsPage from "./pages/Settings/SettingsPage";
import DashboardPage from "./pages/Dashboard/dashboardPage"; 
import ContractsPage from "./pages/Contrat/ContractsPage"; 
import BugReportPage from "./pages/Bug/BugReportPage"; 
import LoginPage from "./pages/Login/LoginPage";
import { useLogin } from "./contexts/LoginContexts/LoginContext";

const navItems: SidenavItem[] = [
  { icon: BsBarChart, label: "Dashboard", to: "/panel" },
  { icon: BiChalkboard, label: "Mes Contrats", to: "/MesContrats" },
  { icon: FiSettings, label: "Settings", to: "/settings" },
  { icon: BiError, label: "Signaler un Bug", to: "/Bug" }
];
const App: React.FC = () => {
  const { isAuthenticated, login, logout } = useLogin();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      document.body.classList.add("login-page");
    } else {
      document.body.classList.remove("login-page");
    }
  }, [location.pathname]);

    console.log("isAuthenticated in App.tsx:", isAuthenticated);

  return (
    <SidenavProvider>
      {isAuthenticated ? (
        <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
          <main>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to="/panel" />} />
                <Route path="/panel" element={<DashboardPage />} />
                <Route path="/MesContrats" element={<ContractsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/Bug" element={<BugReportPage />} />
                <Route path="*" element={<Navigate to="/panel" />} />
              </Routes>
              <Outlet />
            </div>
          </main>
        </SidenavContainer>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </SidenavProvider>
  );
}

export default App;
