import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModifyMoviesCast1788117031092 implements MigrationInterface {
  name = 'ModifyMoviesCast1788117031092';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie_cast" ("movie_id" integer NOT NULL, "person_id" integer NOT NULL, "character_name" text NOT NULL, "billing_order" integer NOT NULL, CONSTRAINT "PK_e6dcab321b8cdf2b51a45453109" PRIMARY KEY ("movie_id", "person_id", "character_name"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" ADD CONSTRAINT "FK_a6c0ed450412f8365639b5a700b" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" ADD CONSTRAINT "FK_f8ef577a57b2521066bdb3a8fa5" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movie_cast" DROP CONSTRAINT "FK_f8ef577a57b2521066bdb3a8fa5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" DROP CONSTRAINT "FK_a6c0ed450412f8365639b5a700b"`,
    );
    await queryRunner.query(`DROP TABLE "movie_cast"`);
  }
}
