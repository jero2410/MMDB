export class MovieReviewResponseDto {
  id: number;
  rating: number;
  title: string;
  body: string;
  created_at: Date;

  user: {
    id: number;
    display_name: string;
  };
}
