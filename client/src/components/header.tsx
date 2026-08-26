import {
  AppBar,
  Toolbar,
  Stack,
  TextField,
  Button,
  Container,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export function Header() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "#E6E6E6" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
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
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button color="inherit">Genre</Button>
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
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon sx={{ color: "#697586" }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  "& fieldset": {
                    borderColor: "#E5E5E5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // change to your focus color
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "#697586",
                },
              }}
            />
            <Button component={Link} to="/signup" variant="text">
              Sign up
            </Button>
            <Button component={Link} to="/login" variant="contained">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
