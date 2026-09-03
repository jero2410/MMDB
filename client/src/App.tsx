import "./App.css";
import { Footer } from "./components/footer";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { AboutScreen } from "./screens/AboutScreen";
import { TermsScreen } from "./screens/TermsScreen";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicyScreen";
import { HelpScreen } from "./screens/HelpScreen";
import { Header } from "./components/header";
import { HomeScreen } from "./screens/homeScreen";
import { LoginScreen } from "./screens/loginScreen";
import { SignupScreen } from "./screens/signupScreen";
import { MovieDetails } from "./screens/MovieDetailsScreen";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/terms" element={<TermsScreen />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
          <Route path="/help" element={<HelpScreen />} />
          <Route path="/movies/:uuid" element={<MovieDetails />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
