import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Review } from './entities/reviews.entity';

@Injectable()
export class ReviewsRepository {
  constructor(
    @InjectRepository(Review)
    private readonly repository: Repository<Review>,
  ) {}

  async findByMovieAndUser(
    movieId: number,
    userId: number,
  ): Promise<Review | null> {
    return this.repository.findOne({
      where: {
        movie_id: movieId,
        user_id: userId,
      },
    });
  }

  async createReview(data: Partial<Review>): Promise<Review> {
    const review = this.repository.create(data);

    return this.repository.save(review);
  }
}
