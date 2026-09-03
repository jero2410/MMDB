import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddingTitleColumnToReviews1788162687615 implements MigrationInterface {
  name = 'AddingTitleColumnToReviews1788162687615';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reviews" ADD "title" text`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "title"`);
  }
}
