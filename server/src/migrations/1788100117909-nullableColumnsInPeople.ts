import { MigrationInterface, QueryRunner } from 'typeorm';

export class NullableColumnsInPeople1788100117909 implements MigrationInterface {
  name = 'NullableColumnsInPeople1788100117909';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "photo_url" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "biography" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "birthdate" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "place_of_birth" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "birthdate" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "biography" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "photo_url" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "place_of_birth" SET NOT NULL`,
    );
  }
}
