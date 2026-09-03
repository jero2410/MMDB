import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ReviewsRepository } from './ReviewsRepository';
import { CreateReviewDto } from './dto/CreateReview.dto';
import { MoviesRepository } from '../movies/movies.repository';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,
    private readonly moviesRepository: MoviesRepository,
  ) {}

  async create(movieUuid: string, userId: number, dto: CreateReviewDto) {
    // Find movie using the UUID from the frontend
    const movie = await this.moviesRepository.findOneByUuid(movieUuid);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    // Don't allow completely empty review
    if (dto.rating === undefined && !dto.title?.trim() && !dto.body?.trim()) {
      throw new BadRequestException('Rating, title, or body is required');
    }

    // Check if this authenticated user already reviewed
    const existingReview = await this.reviewsRepository.findByMovieAndUser(
      movie.id,
      userId,
    );

    if (existingReview) {
      throw new ConflictException('You have already reviewed this movie');
    }

    return this.reviewsRepository.createReview({
      movie_id: movie.id,
      user_id: userId,
      rating: dto.rating,
      title: dto.title?.trim(),
      body: dto.body?.trim(),
    });
  }
}
