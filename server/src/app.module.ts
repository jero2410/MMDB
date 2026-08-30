import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
