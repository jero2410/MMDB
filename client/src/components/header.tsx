import Button from "@mui/material/Button";
import { AppBar, Toolbar, Stack, FormControl } from "@mui/material";
import { Link } from "react-router"

export function Header() {


    const handleHomeClick = (e) => {
    // Check if the current pathname is already the home page
    if (location.pathname === '/') {
      e.preventDefault(); // Stop standard client-side routing
      window.location.reload(); // Force browser refresh
    }
  };

  return (
    <AppBar
      position="static"
      color="inherit"

    >
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
          <Link to={"/"} onClick={handleHomeClick}><img src="/src/assets/MMDB.svg" alt="Logo" style={{ height: "20" }} /></Link>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Genre</Button>
            <FormControl size="small">
              
            </FormControl>
          </Stack>
        </Stack>
        {/* Center/Right Side: Search Input and Auth Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ flexWrap: "nowrap", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              border: "1px solid #ccc",
            }}
          />
          <Link to={"/Signup"}><Button variant="text">Sign up</Button></Link>
          <Link to={"/Login"}><Button variant="contained">Login</Button></Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
