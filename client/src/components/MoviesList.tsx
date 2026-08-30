import {
  Typography,
  Container,
  Box,
  Button,
  Pagination,
} from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";
import type { MoviesResponse } from "../types/moviesResponse.type";

export function MoviesList() {
  const [page, setPage] = useState(1);

  const { status, error, data } = useFetch<MoviesResponse>(
    `http://localhost:3000/movies?page=${page}&limit=8`
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  if (status === "empty") {
    return <p>No movies found.</p>;
  }

  return (
    <Container maxWidth="xl">
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
            fontWeight: "semibold",
            color: "#003055",
          }}
        >
          All Movies
        </Typography>

        <Button
          variant="outlined"
          startIcon={<FilterListRoundedIcon />}
          size="large"
          sx={{
            borderRadius: "70px",
            color: "#68768a",
            borderColor: "#E5E5E5",
            textTransform: "none",
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
        {data.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Pagination
          count={data.pagination.totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          siblingCount={1}
          boundaryCount={0}
          variant="outlined"
          shape="rounded"
          size="large"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#fff",
              borderColor: "#418CFB",
              color: "#418CFB",
              fontWeight: "bold",
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#fff",
            },
          }}
        />
      </Box>
    </Container>
  );
}