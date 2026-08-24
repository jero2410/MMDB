import { AppBar, Toolbar, Stack, FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router";

export function Header() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Pushes content to far left and far right
          alignItems: "center",
          flexWrap: "nowrap", // Forces everything to be on one line
        }}
      >
        {/* Left Side: Logo and Navigation links */}
        <Stack
          direction="row"
          spacing={7}
          sx={{ alignItems: "center", flexWrap: "nowrap" }}
        >
          <Link to={"/"}>
            <img
              src="/src/assets/MMDB.svg"
              alt="Logo"
              style={{ height: "20" }}
            />
          </Link>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Genre</Button>
            <FormControl size="small"></FormControl>
          </Stack>
        </Stack>
        {/* Center/Right Side: Search Input and Auth Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ flexWrap: "nowrap", alignItems: "center" }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"

            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "#ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2", // change to your focus color
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px 12px",
              },
            }}
          />
          <Button component={Link} to="/Signup" variant="text">
            Sign up
          </Button>
          <Button component={Link} to="/Login" variant="contained">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
