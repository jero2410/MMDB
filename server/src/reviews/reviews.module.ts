import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Review } from './entities/reviews.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { ReviewsRepository } from './ReviewsRepository';

import { MoviesModule } from '../movies/movies.module';
@Module({
  imports: [TypeOrmModule.forFeature([Review]), MoviesModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsRepository],
  exports: [ReviewsService],
})
export class ReviewsModule {}
