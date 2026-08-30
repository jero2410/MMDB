import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { Movie } from './movies/entities/movies.entity';
import { User } from './users/entities/users.entity';
import { Review } from './reviews/entities/reviews.entity';
import { People } from './people/entities/people.entity';
import { MovieCrew } from './movies/entities/movieCrew.entity';
import { MovieCast } from './movies/entities/movieCast.entity';
import { Genre } from './genres/entities/genres.entity';
import { MovieGenres } from './movies/entities/movieGenres.entity';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABSAE,
  entities: [
    Movie,
    User,
    Review,
    People,
    MovieCrew,
    MovieCast,
    Genre,
    MovieGenres,
  ],
  synchronize: false,
  logging: true,
  migrations: [__dirname + '/migrations/**/*.ts'],
};

export default new DataSource(dataSourceOptions);
