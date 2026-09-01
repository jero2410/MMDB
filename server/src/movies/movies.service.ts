import { Injectable, NotFoundException } from '@nestjs/common';
import { MovieDetailsResponseDto } from './dto/movie-details-response.dto';
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

  async findOne(uuid: string): Promise<MovieDetailsResponseDto> {
    const movie = await this.moviesRepository.findOne({
      where: { uuid },

      select: {
        id: true,
        uuid: true,
        title: true,
        overview: true,
        poster_url: true,
        trailer_url: true,
        release_year: true,
        runtime_minutes: true,
        language: true,
        average_rating: true,

        movieCast: {
          character_name: true,
          person: {
            id: true,
            name: true,
            photo_url: true,
          },
        },

        movieCrew: {
          job: true,
          person: {
            id: true,
            name: true,
          },
        },

        movieGenres: {
          movie_id: true,
          genre_id: true,
          genre: {
            id: true,
            name: true,
          },
        },

        reviews: {
          id: true,
          rating: true,
          title: true,
          body: true,
          created_at: true,
          user: {
            id: true,
            display_name: true,
          },
        },
      },

      relations: {
        movieCast: {
          person: true,
        },

        movieCrew: {
          person: true,
        },

        movieGenres: {
          genre: true,
        },

        reviews: {
          user: true,
        },
      },
    });

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    const { id, ...movieDetails } = movie;

    return movieDetails;
  }
}
