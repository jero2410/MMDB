import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUUIDToUsers1788427363105 implements MigrationInterface {
  name = 'AddUUIDToUsers1788427363105';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_951b8f1dfc94ac1d0301a14b7e1" UNIQUE ("uuid")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "uuid"`);
    await queryRunner.query(
      `ALTER TABLE "movies" ADD "average_rating" numeric(2,1) NOT NULL DEFAULT '0'`,
    );
  }
}
