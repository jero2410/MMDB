import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ILike } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieQueryDto } from './dto/MoviePagination.dto';
import { MovieDetailsResponseDto } from './dto/movie-details-response.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findAllMovies(queryDto: MovieQueryDto) {
    const { search, page, limit } = queryDto;

    const skip = (page - 1) * limit;

    const [movies, total] = await this.moviesRepository.findAndCount({
      where: search?.trim()
        ? {
            title: ILike(`%${search.trim()}%`),
          }
        : undefined,

      skip,
      take: limit,

      order: {
        id: 'ASC',
      },
    });

    return {
      movies: movies.map((movie) => ({
        uuid: movie.uuid,
        title: movie.title,
        poster_url: movie.poster_url,
        release_year: movie.release_year,
        average_rating: movie.average_rating,
      })),

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
