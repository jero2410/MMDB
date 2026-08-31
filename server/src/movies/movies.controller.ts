import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieQueryDto } from './dto/MoviePagination.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAllMovies(@Query() queryDto: MovieQueryDto) {
    return this.moviesService.findAllMovies(queryDto);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.moviesService.findOne(uuid);
  }
}
