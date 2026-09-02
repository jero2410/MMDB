import { Avatar, Box, Button, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";
import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import { ReviewPopup } from "./ReviewPopup";

export function MovieReviews({ movie }: { movie: MovieDetilsResponse }) {
  const reviews = movie.reviews ?? [];

  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{ fontWeight: "Bold", color: "#1A2C59" }}
        >
          User Reviews
        </Typography>

        <Button
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: 500,
            color: "#4285F4",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          View more
        </Button>
      </Box>

      {/* Write review */}
      <Box
        sx={{
          width: "1044",
          minHeight: "57px",
          border: "2px solid #D7DDE8",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "14",
            }}
          >
            A
          </Avatar>

          <Typography
            sx={{
              color: "#929CAE",
              fontSize: "15px",
            }}
          >
            Share your thoughts on {movie.title}...
          </Typography>
        </Box>
        {/*review button and popup */}
        <ReviewPopup movie={movie} />
      </Box>

      {/* Reviews */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4.5,
        }}
      >
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard
            key={review.id}
            name={review.user.display_name}
            rating={review.rating}
            title={review.title}
            body={review.body}
            createdAt={review.created_at}
          />
        ))}
      </Box>
    </Box>
  );
}
