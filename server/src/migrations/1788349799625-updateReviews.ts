import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateReviews1788349799625 implements MigrationInterface {
  name = 'UpdateReviews1788349799625';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "CHK_d8c138aaf1f801cb835b445359"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "CHK_ff789ca2df88e1b1036546a5c3" CHECK ("rating" IS NULL OR ("rating" >= 1 AND "rating" <= 10))`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "UQ_9e3702ffa3d824d95eee3ec287a" UNIQUE ("movie_id", "user_id")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "UQ_9e3702ffa3d824d95eee3ec287a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "CHK_ff789ca2df88e1b1036546a5c3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "CHK_d8c138aaf1f801cb835b445359" CHECK (((rating >= 1) AND (rating <= 10)))`,
    );
  }
}
