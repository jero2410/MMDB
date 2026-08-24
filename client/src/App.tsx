import "./App.css";
import { Footer } from "./components/footer";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { AboutScreen } from "./screens/AboutScreen";
import { TermsScreen } from "./screens/TermsScreen";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicyScreen";
import { HelpScreen } from "./screens/HelpScreen";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* header */}
      <Routes> 
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/Terms" element={<TermsScreen />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicyScreen />} />
        <Route path="/Help" element={<HelpScreen />} />
      </Routes>

      <Box component="main" sx={{ flex: 1 }}>
        {/* Your page content */}
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
