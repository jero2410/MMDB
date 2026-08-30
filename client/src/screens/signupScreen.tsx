import { useState } from "react";
import { Box, Card, Typography, TextField, Button, Alert } from "@mui/material";
import { Link } from "react-router";
import MMDBLogo from "../assets/MMDB.svg";
import { signup } from "../api/auth.api";

export function SignupScreen() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signup({
        first_name,
        last_name,
        email,
        password,
      });

      console.log("Signup successful:", result);
      setSuccess("Account created successfully!");
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
          Create your account
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
          <Typography>First name</Typography>
          <TextField
            placeholder="Jane"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Typography>Last name</Typography>
          <TextField
            placeholder="Doe"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mb: 3 }}
          />

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
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

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
            {loading ? "Creating account..." : "Sign up"}
          </Button>

          <Typography
            sx={{
              color: "#888",
              mt: 1,
            }}
          >
            Already have an account?{" "}
            <Box
              component={Link}
              to="/login"
              sx={{
                color: "#4285F4",
                textDecoration: "none",
              }}
            >
              Sign in
            </Box>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
