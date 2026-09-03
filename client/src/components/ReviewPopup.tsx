import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CardMedia,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { MovieDetilsResponse } from "../types/movieDetailsResponse";

export function ReviewPopup({ movie }: { movie: MovieDetilsResponse }) {
  const [open, setOpen] = useState(false);

  const [reviewTitle, setReviewTitle] = useState("");
  const [review, setReview] = useState("");

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setReviewTitle("");
    setReview("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      title: reviewTitle,
      review,
      movieId: movie.uuid,
    });

    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          minHeight: 17,
          minWidth: 132,
          textTransform: "none",
          borderRadius: "8px",
          backgroundColor: "#4285F4",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#3578E5",
            boxShadow: "none",
          },
        }}
      >
        Write a review
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: "540px",
              minHeight:"452px",
              borderRadius: "16px",
              p: 1,
            },
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 16,
              color: "#697586",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Header */}
          <DialogTitle sx={{ p: 2 }}>
            <Card
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems:"center",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <CardMedia
                component="img"
                image={movie.poster_url}
                alt={`${movie.title} photo`}
                sx={{
                  borderRadius: 1,
                  height: 72,
                  width: 48,
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <Typography
                  sx={{
                    color: "#737A8A",
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  WRITE A REVIEW
                </Typography>

                <Typography
                  sx={{
                    color: "#1A2C59",
                    fontSize: "20px",
                    fontWeight:"bold"
                  }}
                >
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </DialogTitle>

          {/* Form */}
          <DialogContent sx={{ px: 2, pt: 1 }}>
            {/* Review title */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  color: "#1A2C59",
                  fontSize: "14px",
                  mb: 1,
                }}
              >
                Title
              </Typography>

              <TextField
                fullWidth
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                placeholder="Sum up your review in a line"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    height: 55,
                    minWidth:"484px",
                    maxHeight:"42px"
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#9BA6BA",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Review */}
            <Box>
              <Typography
                sx={{
                  color: "#1A2C59",
                  fontSize: "14px",
                  mb: 1,
                }}
              >
                Review
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={6}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder={`Share your thoughts on ${movie.title}...`}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#9BA6BA",
                    opacity: 1,
                    height:"130px"
                  },
                }}
              />
            </Box>
          </DialogContent>

          {/* Actions */}
          <DialogActions
            sx={{
              px: 2,
              pt: 2,
              pb: 1,
              gap: 1,
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                color: "#697586",
                textTransform: "none",
                fontSize: "15px",
                px: 2,
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={!reviewTitle.trim() || !review.trim()}
              sx={{
                backgroundColor: "#4285F4",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "18px",
                px: 4,
                py: 1.2,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#3578E5",
                  boxShadow: "none",
                },
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
