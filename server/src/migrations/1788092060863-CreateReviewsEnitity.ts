import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReviewsEnitity1788092060863 implements MigrationInterface {
  name = 'CreateReviewsEnitity1788092060863';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "movie_id" integer NOT NULL, "user_id" integer NOT NULL, "rating" integer, "body" text, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "CHK_d8c138aaf1f801cb835b445359" CHECK ("rating" >= 1 AND "rating" <= 10), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "FK_563501cf3faa75a1ca40be84f82" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "FK_563501cf3faa75a1ca40be84f82"`,
    );
    await queryRunner.query(`DROP TABLE "reviews"`);
  }
}
