import { Avatar, Box, Card, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { formatName, getInitial } from "../utils/NameFormatter";
import { getRelativeDate } from "../utils/DateFormatter";

interface ReviewCardProps {
  name: string;
  rating: number;
  title: string;
  body: string;
  createdAt: string;
}

export function ReviewCard({
  name,
  rating,
  title,
  body,
  createdAt,
}: ReviewCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#F3F4F6",
        borderRadius: "12px",
        p: 3,
        minHeight: "219px",
        boxSizing: "border-box",
      }}
    >
      {/* User */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <Avatar
          sx={{
            width: 44,
            height: 44,
            backgroundColor: "#4285F4",
            fontSize: "18px",
          }}
        >
          {getInitial(name)}
        </Avatar>

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#1A2C59",
              lineHeight: 1.2,
            }}
          >
            {formatName(name)}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              color: "#7F8796",
              mt: 0.5,
            }}
          >
            {getRelativeDate(createdAt)}
          </Typography>
        </Box>
      </Box>

      {/* Rating */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 3,
          mb: 2.5,
        }}
      >
        <StarRoundedIcon
          sx={{
            color: "#FFB800",
          }}
        />

        <Typography
          sx={{
            fontWeight: 500,
            color: "#1A2C59",
          }}
        >
          {rating}
        </Typography>
      </Box>

      {/* Review title */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight:'bold',
          color: "#1A2C59",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* Review body */}
      <Typography
        sx={{
          fontSize: "15px",
          lineHeight: 1.5,
          color: "#374151",
        }}
      >
        {body}
      </Typography>
    </Card>
  );
}
