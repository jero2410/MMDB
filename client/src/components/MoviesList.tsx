import { Typography, Container, Box, Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";
import type { Movie } from "../types/movie.type";

export function MoviesList() {
  const { status, error } = useFetch<Movie[]>("http://localhost:3000/movies");

  //   if (status === "loading") {
  //     return <p>Loading...</p>;
  //   }

  //   if (status === "error") {
  //     return <p>Error: {error.message}</p>;
  //   }

  //   if (status === "empty") {
  //     return <p>No movies found.</p>;
  //   }

  // Here TypeScript knows that state has `data`
  const movies = {
    data: [
      {
        id: 1,
        title: "Arrival",
        poster_url: "https://picsum.photos/seed/mmdb-movie-1/400/600",
        release_year: 2016,
      },
      {
        id: 2,
        title: "Whiplash",
        poster_url: "https://picsum.photos/seed/mmdb-movie-2/400/600",
        release_year: 2014,
      },
      {
        id: 3,
        title: "Parasite",
        poster_url: "https://picsum.photos/seed/mmdb-movie-3/400/600",
        release_year: 2019,
      },
      {
        id: 4,
        title: "Mad Max: Fury Road",
        poster_url: "https://picsum.photos/seed/mmdb-movie-4/400/600",
        release_year: 2015,
      },
      {
        id: 5,
        title: "Get Out",
        poster_url: "https://picsum.photos/seed/mmdb-movie-5/400/600",
        release_year: 2017,
      },
      {
        id: 6,
        title: "Blade Runner 2049",
        poster_url: "https://picsum.photos/seed/mmdb-movie-6/400/600",
        release_year: 2017,
      },
      {
        id: 7,
        title: "The Grand Budapest Hotel",
        poster_url: "https://picsum.photos/seed/mmdb-movie-7/400/600",
        release_year: 2014,
      },
      {
        id: 8,
        title: "Spirited Away",
        poster_url: "https://picsum.photos/seed/mmdb-movie-8/400/600",
        release_year: 2001,
      },
    ],
    pagination: {
      page: 1,
      limit: 8,
      total: 64,
      totalPages: 8,
    },
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#1A2C59",
          }}
        >
          All Movies
        </Typography>

        <Button
          variant="outlined"
          startIcon={<SortIcon />}
          sx={{
            borderRadius: "70px",
            color: "#68768a",
            textTransform: "none",

            "& .MuiButton-startIcon": {
              marginRight: 1,
            },

            "&:hover": {
              border: "2px solid #e0e0e0",
              backgroundColor: "transparent",
            },
          }}
        >
          Sort by
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {movies.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Container>
  );
}
