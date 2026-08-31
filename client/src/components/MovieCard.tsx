import type { Movie } from "../types/movie.type";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card
      sx={{
        height: "556px",
        width: "350px",
        borderRadius: 1,
        gap: "23px",
        boxShadow:0,
        "&:hover": {
          boxShadow: 6,
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        image={movie.poster_url}
        alt={`${movie.title} poster`}
        sx={{
          height: 412,
          width: 308,
          borderRadius: 1,
          mx: "auto",
          objectFit: "cover",
          mt: "16px",
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <StarRoundedIcon sx={{ color: "#FEB600" }} />
          <Typography sx={{ fontWeight: "bold", color:"#1A2C59" }}>{movie.average_rating}</Typography>
        </Box>
        <Typography variant="h6" component="h3" noWrap sx={{ fontWeight:"bold" ,color:"#1A2C59"}}>
          {movie.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ mt: 1, mb: 2, color:"#7C7C7C" }}
        >
          {movie.release_year}
        </Typography>
      </CardContent>
    </Card>
  );
}
