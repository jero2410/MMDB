import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Alert,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router";
import MMDBLogo from "../assets/MMDB.svg";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await login({
        email,
        password,
        rememberMe,
      });
      if (rememberMe) {
        localStorage.setItem("access_token", result.access_token);
      } else {
        sessionStorage.setItem("access_token", result.access_token);
      }

      console.log(result);
       navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        py: 4,
        color: "#1A2C59",
      }}
    >
      <Box
        component="img"
        src={MMDBLogo}
        alt="MMDB"
        sx={{
          width: "105px",
        }}
      />

      <Card
        sx={{
          width: "400px",
          borderRadius: 4,
          boxShadow: 0,
          border: "1px solid #d5dce5",
          p: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#1A2C59",
            mb: 3,
          }}
        >
          Sign in
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "#1A2C59",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        >
          <Typography>Email</Typography>
          <TextField
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Typography>Password</Typography>
          <TextField
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* {error && (
            <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>
          )} */}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            size="large"
            disabled={loading}
            sx={{
              mt: 1,
              py: 1.5,
              borderRadius: "10px",
              color: "#ffffff",
              backgroundColor: "#418CFB",
              height: "56px",
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <FormControlLabel
            sx={{color:"#7C7C7C"}}
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{color:"#D0D5E0"}}
              />
            }
            label="Keep me signed in"
          />

          <Typography
            sx={{
              color: "#7C7C7C",
              mt: 1,
            }}
          >
            New to MMDB?{" "}
            <Box
              component={Link}
              to="/signup"
              sx={{
                color: "#4285F4",
                textDecoration: "none",
              }}
            >
              Sign up
            </Box>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
