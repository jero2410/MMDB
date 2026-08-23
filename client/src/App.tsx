import "./App.css";
import { Header } from "./components/header";
import { Route, Routes } from "react-router";
import { HomeScreen } from "./screens/homeScreen";
import { LoginScreen } from "./screens/loginScreen";
import { SignupScreen } from "./screens/signupScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Login" element={<LoginScreen />} />
        <Route path="/Signup" element={<SignupScreen />} />
      </Routes>
    </>
  );
}

export default App;
