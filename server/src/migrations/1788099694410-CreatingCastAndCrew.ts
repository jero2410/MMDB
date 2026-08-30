import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatingCastAndCrew1788099694410 implements MigrationInterface {
  name = 'CreatingCastAndCrew1788099694410';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie_cast" ("movie_id" integer NOT NULL, "person_id" integer NOT NULL, "character_name" text NOT NULL, "billing_order" integer NOT NULL, CONSTRAINT "PK_e6dcab321b8cdf2b51a45453109" PRIMARY KEY ("movie_id", "person_id", "character_name"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "people" ("id" SERIAL NOT NULL, "name" text NOT NULL, "photo_url" text NOT NULL, "biography" text NOT NULL, "gender" text NOT NULL, "birthdate" date NOT NULL, "place_of_birth" text NOT NULL, "known_for" text NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movie_crew" ("movie_id" integer NOT NULL, "person_id" integer NOT NULL, "job" text NOT NULL, CONSTRAINT "PK_6ce364160dc8ba4358fc888ee7e" PRIMARY KEY ("movie_id", "person_id", "job"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" ADD CONSTRAINT "FK_a6c0ed450412f8365639b5a700b" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" ADD CONSTRAINT "FK_f8ef577a57b2521066bdb3a8fa5" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_crew" ADD CONSTRAINT "FK_e11d125b8be76ef5893e7c08b15" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_crew" ADD CONSTRAINT "FK_eef68b06d038e5fe9b4490b4512" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movie_crew" DROP CONSTRAINT "FK_eef68b06d038e5fe9b4490b4512"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_crew" DROP CONSTRAINT "FK_e11d125b8be76ef5893e7c08b15"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" DROP CONSTRAINT "FK_f8ef577a57b2521066bdb3a8fa5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "movie_cast" DROP CONSTRAINT "FK_a6c0ed450412f8365639b5a700b"`,
    );
    await queryRunner.query(`DROP TABLE "movie_crew"`);
    await queryRunner.query(`DROP TABLE "people"`);
    await queryRunner.query(`DROP TABLE "movie_cast"`);
  }
}
