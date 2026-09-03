import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddingMovieRatingColumnInMovies1788164619955 implements MigrationInterface {
  name = 'AddingMovieRatingColumnInMovies1788164619955';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" ADD "average_rating" numeric(2,1) NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" DROP COLUMN "average_rating"`,
    );
  }
}
