export class MovieCastResponseDto {
  character_name: string;

  person: {
    id: number;
    name: string;
    photo_url: string;
  };
}
