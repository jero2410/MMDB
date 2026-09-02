import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import { CardMedia, Box } from "@mui/material";


export function MovieMedia({ movie }: { movie: MovieDetilsResponse }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        mb: 2,
      }}
    >
      <CardMedia
        component="img"
        image={movie.poster_url}
        alt={`${movie.title} poster`}
        sx={{
          height: 412,
          width: 308,
          borderRadius: 3,
          backgroundColor: "#000",
          display: "block",
        }}
      />
      <CardMedia
        component="video"
        controls
        autoPlay
        muted
        src={movie.trailer_url}
        title={`${movie.title} trailer`}
        sx={{ width: "100%", height: "412px", borderRadius: 3 }}
      />
    </Box>
  );
}
