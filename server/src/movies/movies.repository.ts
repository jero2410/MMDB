import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository, FindOneOptions } from 'typeorm';
import { Movie } from './entities/movies.entity';

interface FindPaginatedOptions {
  search?: string;
  skip: number;
  take: number;
}

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movie)
    private readonly repository: Repository<Movie>,
  ) {}

  findPaginated({ search, skip, take }: FindPaginatedOptions) {
    return this.repository.findAndCount({
      where: search
        ? {
            title: ILike(`%${search}%`),
          }
        : undefined,

      skip,
      take,

      order: {
        release_year: 'DESC',
        uuid: 'ASC',
      },
    });
  }

  findOne(options: FindOneOptions<Movie>) {
    return this.repository.findOne(options);
  }
}
