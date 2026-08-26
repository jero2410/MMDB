import { Injectable } from '@nestjs/common';
import { Repository, ILike } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieQueryDto } from './dto/MoviePagination.dto';

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
        id: movie.id,
        title: movie.title,
        poster_url: movie.poster_url,
        release_year: movie.release_year,
      })),

      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
