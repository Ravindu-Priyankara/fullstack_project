import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/sidebar/MyProSidebar"; 

import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import Index from "./pages/landing";
import Test from "./pages/test";
import Login from "./signIn"
import Project from "./pages/project";
import Issue from "./pages/issue";
import IssueTable from "./pages/issueTable";


const App = () => {
  const [theme, colorMode] = useMode();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    // Redirect to /dashboard after successful login
    //navigate('/dashboard');
    <Route>
      <Route path="/" element={<Index />} />
    </Route>
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
              {isLoggedIn ? (
                  <>
                    {/* ... (other routes) */}
                    <Route path="/" element={<Index />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/test" element={<Test/>} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/issueTable" element={<IssueTable />} />
                    {/* ... (other routes) */}
                  </>
                ) : (
                  //<Route path="*" element={<Login/>} />
                  <Route
                    path="/"
                    element={<Login onLoginSuccess={handleLoginSuccess} />}
                  />
                )}
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
