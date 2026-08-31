import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MoviesRepository } from './movies.repository';
import { MovieQueryDto } from './dto/movie-query.dto';
import { MovieCardDto } from './dto/movie-card.dto';
import { MovieListResponseDto } from './dto/movie-list-response.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async findAllMovies(queryDto: MovieQueryDto): Promise<MovieListResponseDto> {
    const { search, page, limit } = queryDto;

    const skip = (page - 1) * limit;

    const [movies, total] = await this.moviesRepository.findPaginated({
      search: search?.trim(),
      skip,
      take: limit,
    });

    const movieCards = plainToInstance(MovieCardDto, movies, {
      excludeExtraneousValues: true,
    });

    return {
      movies: movieCards,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
