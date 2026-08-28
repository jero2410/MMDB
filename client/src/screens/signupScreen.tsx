import { Box, Card, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router";
import MMDBLogo from "../assets/MMDB.svg";

export function SignupScreen() {
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
      {/* Logo */}
      <Box
        component="img"
        src={MMDBLogo}
        alt="MMDB"
        sx={{
          width: "105px",
        }}
      />

      {/* Card */}
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
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "#1A2C59",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Set your desired radius here
              },
           
          }}
        >
          <Typography>First name</Typography>
          <TextField placeholder="Jane" sx={{mb:3}}/>

          <Typography>Last name</Typography>
          <TextField placeholder="Doe" sx={{mb:3}}/>

          <Typography>Email</Typography>
          <TextField placeholder="email@example.com" sx={{mb:3}}/>

          <Typography>Password</Typography>
          <TextField type="password" placeholder="••••••••" sx={{mb:2}}/>

          <Button
            size="large"
            sx={{
              mt: 1,
              py: 1.5,
              borderRadius:"10px",
              color:"#ffffff",
              backgroundColor: '#418CFB',
              height:"56px"
            }}
          >
            Sign up
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
