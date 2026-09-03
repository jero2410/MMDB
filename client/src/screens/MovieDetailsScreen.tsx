import { useParams } from "react-router";
import { useMovie } from "../hooks/useMovie";
import { Box } from "@mui/material";
import { Link } from "react-router";
import { Card, CardContent } from "@mui/material";
import { MovieCrew } from "../components/MovieCrew";
import { MovieCast } from "../components/MovieCast";
import { MovieMainDetails } from "../components/MovieMainDetails";
import { MovieMedia } from "../components/MovieMedia";
import { MovieReviews } from "../components/MovieReviews";


export function MovieDetails() {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, isLoading, isError, error } = useMovie(uuid!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <p>No movies details for this movie found.</p>;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 10,
        color: "#1A2C59",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1450px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#697586" }}
          >
            Home
          </Box>
          <Box sx={{ ml: 1, mr: 1 }}>|</Box>
          <Box>{data.title}</Box>
        </Box>

        {/* media, title, rate, overview */}
        <Card
      sx={{
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "10px",
        boxShadow: 2,
        p: 4,
      }}
    >
      {/* media */}
      <MovieMedia movie={data}/>

      <CardContent>

        {/*Main details*/}
        <MovieMainDetails movie={data}/>

        {/* crew */}
        <MovieCrew movie={data} />

        {/* cast */}
        <MovieCast movie={data} />

        {/* reviews */}
        <MovieReviews movie={data} />
      </CardContent>
    </Card>
      </Box>
    </Box>
  );
}
