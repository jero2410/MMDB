import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { Movie } from './movies/entities/movies.entity';
import { User } from './users/entities/users.entity';
import { Review } from './reviews/entities/reviews.entity';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABSAE,
  entities: [Movie, User, Review],
  synchronize: false,
  logging: true,
  migrations: [__dirname + '/migrations/**/*.ts'],
};

export default new DataSource(dataSourceOptions);
