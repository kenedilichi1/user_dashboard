import { Box } from "@mui/material";
import React from "react";
import Dashboard from "../../components/dashboard";
import NavBar from "../../components/app-bar/app-bar";

function DashboardPage() {
  return (
    <Box>
      <NavBar />
      <Dashboard />
    </Box>
  );
}

export default DashboardPage;
