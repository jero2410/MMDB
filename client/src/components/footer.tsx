import { Box, Button, Container } from "@mui/material";
import MMDBLogo from "../assets/MMDB.svg";
import { Link } from "react-router";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: "214px",
        backgroundColor: "#003055",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
        color: "white",
        flexShrink: 0,
      }}
    >
      <Button component={Link} to="/">
        <Box component="img" src={MMDBLogo} alt="MMDB" />
      </Button>

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>

        <Button component={Link} to="/terms" color="inherit">
          Terms of use
        </Button>

        <Button component={Link} to="/privacy-policy" color="inherit">
          Privacy Policy
        </Button>

        <Button component={Link} to="/help" color="inherit">
          Help
        </Button>
      </Container>

      <Box>© 2026 MMDB. All rights reserved.</Box>
    </Box>
  );
}