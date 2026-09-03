import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import type { MovieDetilsResponse } from "../types/movieDetailsResponse";

export function MovieCast({ movie }: { movie: MovieDetilsResponse }) {
  return (
    <Box>
      <Typography variant="h5" component="h3" sx={{ fontWeight: "Bold", mb:1, color:"#003055" }}>
        Cast
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {movie.movieCast.map((cast) => (
          <Card
            key={cast.person.id}
            sx={{
              width: 225,
              height: 75,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: 2,
              pl:2

            }}
          >
            <CardMedia
              component="img"
              image={cast.person.photo_url}
              alt={`${cast.person.name} photo`}
              sx={{ borderRadius: 1, height: 50, width: 50 }}
            />

            <CardContent>
              <Typography sx={{color:"#003055", fontWeight:'bold'}}>{cast.person.name}</Typography>
              <Typography sx={{color:"#697586"}}>{cast.character_name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
