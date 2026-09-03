import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import { Box, Typography } from "@mui/material";

export function MovieCrew({ movie }: { movie: MovieDetilsResponse }) {
  return (
    <>
      <Box sx={{ color: "#003055", my: 5 }}>
        <Typography sx={{ fontWeight: "Bold" }}>
          Director:{" "}
          {movie.movieCrew
            .filter((cr) => cr.job === "Director")
            .map((cr) => cr.person.name)
            .join(", ")}
        </Typography>
        <Typography sx={{ fontWeight: "Bold", my: 2 }}>
          Writer:{" "}
          {movie.movieCrew
            .filter((cr) => cr.job === "Writer")
            .map((cr) => cr.person.name)
            .join(", ")}
        </Typography>
        <Typography sx={{ fontWeight: "Bold" }}>
          Language: {movie.language}
        </Typography>
      </Box>
    </>
  );
}
