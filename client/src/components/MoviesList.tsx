import { Typography, Container, Box, Button, Pagination } from "@mui/material";
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
        title: "The Odyssey",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNTcyNmJlZmQtNDUwYy00NDBjLTg1NGQtYTY2Y2UxMWM3NmI1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        release_year: 2026,
      },
      {
        id: 2,
        title: "Spider-Man: Brand New Day",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        release_year: 2026,
      },
      {
        id: 3,
        title: "Avatar: Fire and Ash",
        poster_url: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        release_year: 2025,
      },
      {
        id: 4,
        title: "Mad Max: Fury Road",
        poster_url: "https://picsum.photos/seed/mmdb-movie-4/400/600",
        release_year: 2015,
      },
      {
        id: 5,
        title: "Superman",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
        release_year: 2025,
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
        title: "F1",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        release_year: 2025,
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
    <Container maxWidth="xl" >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
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
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {movies.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
      <Box sx={{justifyItems:"center"}}>
      <Pagination
          count={10}
          siblingCount={1}
          boundaryCount={0}
          variant="outlined"
          shape="rounded"
          size="large"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#fff",
              borderColor:"#418CFB",
              color: "#418CFB",
              fontWeight: 'bold',
              my:10,
              "&:hover": {
                backgroundColor: "#115293",
              },
            },
          }}
        />
        </Box>
    </Container>
  );
}
