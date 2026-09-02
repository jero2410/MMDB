import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import { Box, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { FormatTime } from "../utils/TimeFormatter";
import { RatingPopup } from "./RatePopup";

export function MovieMainDetails({ movie }: { movie: MovieDetilsResponse }) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontWeight: "bold", color: "#1A2C59", mr: 1 }}
        >
          {movie.title}
        </Typography>
        <Typography variant="h5" component="h3" sx={{ color: "#697586" }}>
          ({movie.release_year})
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <StarRoundedIcon sx={{ color: "#FEB600" }} />
        <Typography sx={{ fontWeight: "bold", color: "#418CFB" }}>
          {movie.average_rating}
        </Typography>
        <Typography sx={{ color: "#697586", ml: 1 }}>
          Reviews ({movie.reviews.length})
        </Typography>
        <Box sx={{ ml: 1, mr: 1, color: "#697586" }}>|</Box>

        <RatingPopup movie={movie} />
      </Box>
      <Typography sx={{ color: "#697586" }}>
        {FormatTime(movie.runtime_minutes)} •{" "}
        {movie.movieGenres.map((g) => g.genre.name).join(", ")}
      </Typography>
      <Box sx={{ color: "#003055", my: 3 }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: "Bold" }}>
          Overview
        </Typography>
        <Typography>{movie.overview}</Typography>
      </Box>
    </>
  );
}
