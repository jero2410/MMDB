import { Box, Button, Container } from "@mui/material";
import MMDBLogo from "../assets/MMDB.svg";
import { Link } from "react-router";

export function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          height: "214px",
          backgroundColor: "#003055",
          display: "flex",
          alignItems: "center", // Vertically centers the content
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          color: "white",
        }}
      >
        <Button component={Link} to="/">
          <Box component="img" src={MMDBLogo} alt="MMDB" />
        </Button>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center", // Horizontally centers the buttons
            gap: 2, // Spaces between buttons
            flexWrap: "wrap", // Wraps nicely on mobile screens
          }}
        >
          <Button component={Link} to="/about" variant="text" color="inherit">
            {" "}
            About{" "}
          </Button>
          <Button component={Link} to="/terms" variant="text" color="inherit">
            Terms of use
          </Button>
          <Button
            component={Link}
            to="/privacy-policy"
            variant="text"
            color="inherit"
          >
            Privacy Policy
          </Button>
          <Button component={Link} to="/help" variant="text" color="inherit">
            Help
          </Button>
        </Container>
        <Box>© 2026 MMDB. All rights reserved.</Box>
      </Box>
    </>
  );
}
