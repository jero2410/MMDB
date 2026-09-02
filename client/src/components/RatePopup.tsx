import { useState } from "react";
import {
  Button,
  Dialog,
  CardMedia,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { MovieDetilsResponse } from "../types/movieDetailsResponse";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function RatingPopup({ movie }: { movie: MovieDetilsResponse }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRating(null);
  };

  const handleSubmit = () => {
    if (rating === null) return;

    console.log({
      movieId: movie.uuid,
      rating,
    });

    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          boxShadow: "none",
          border: 0,
          color: "#418CFB",
        }}
      >
        <StarBorderIcon />
        Rate
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{
          paper: {
            sx: {
              width: "440px",
              borderRadius: "16px",
              p: 2,
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: 95,
            mb: 2,
          }}
        >
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <CardMedia
              component="img"
              image={movie.poster_url}
              alt={`${movie.title} photo`}
              sx={{
                width: 64,
                height: 95,
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <CardContent sx={{ alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#737A8A",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                RATE THIS
              </Typography>

              <Typography
                sx={{
                  color: "#1A2C59",
                  fontSize: "20px",
                }}
              >
                {movie.title}
              </Typography>
            </CardContent>
          </Card>

          {/* Close */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              color: "#697586",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Rating */}
        <Box
          sx={{
            py: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Rating
            value={rating}
            onChange={(_, newValue) => {
              setRating(newValue);
            }}
            max={10}
            size="large"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#418CFB",
              },
              "& .MuiRating-iconEmpty": {
                color: "#418CFB",
              },
              fontSize: "40px",
            }}
          />

          <Typography
            sx={{
              color: "#737A8A",
              fontSize: "16px",
              mt: 0.5,
            }}
          >
            {rating !== null ? `${rating} / 10` : "Click a star to rate"}
          </Typography>
        </Box>

        {/* Actions */}
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={rating === null}
            sx={{
              height: 53,
              backgroundColor: "#4285F4",
              borderRadius: "9px",
              textTransform: "none",
              fontSize: "18px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#3578E5",
                boxShadow: "none",
              },
            }}
          >
            Rate
          </Button>

          <Button
            fullWidth
            onClick={handleClose}
            sx={{
              color: "#697586",
              textTransform: "none",
              fontSize: "17px",
              mt: 0.5,
            }}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
