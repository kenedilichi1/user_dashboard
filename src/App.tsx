import { Box } from "@mui/material";
import HomePage from "./pages/home_page/home_page";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard-page/dashboard";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Box>
  );
}

export default App;
