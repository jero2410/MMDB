import { Injectable } from '@nestjs/common';
import { Repository, ILike } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findAllMovies(query: string): Promise<Movie[]> {
    if (!query?.trim()) {
      return this.moviesRepository.find();
    }

    return this.moviesRepository.find({
      where: {
        title: ILike(`%${query}%`),
      },
    });
  }
}
