import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMovieEnitity1787492866667 implements MigrationInterface {
  name = 'CreateMovieEnitity1787492866667';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movies" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "release_year" integer NOT NULL, "runtime_minutes" integer, "overview" text, "poster_url" text NOT NULL, "trailer_url" text, "language" text, CONSTRAINT "UQ_53395cfedf4627c8ffbe14811d0" UNIQUE ("uuid"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movies"`);
  }
}
