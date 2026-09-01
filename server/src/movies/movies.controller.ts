import { Controller, Get, Query, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieQueryDto } from './dto/movie-query.dto';
import { MovieListResponseDto } from './dto/movie-list-response.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAllMovies(
    @Query() queryDto: MovieQueryDto,
  ): Promise<MovieListResponseDto> {
    return this.moviesService.findAllMovies(queryDto);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.moviesService.findOne(uuid);
  }
}
