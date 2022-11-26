import { MigrationInterface, QueryRunner } from "typeorm";

export class correcionNota1669499846023 implements MigrationInterface {
    name = 'correcionNota1669499846023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "FK_da773d29756dc87b181e748c59d"`);
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "UQ_da773d29756dc87b181e748c59d"`);
        await queryRunner.query(`ALTER TABLE "materia" DROP COLUMN "notasId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "notasId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_a55833f2d1bf02e0eab356bffda" UNIQUE ("notasId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_a55833f2d1bf02e0eab356bffda" FOREIGN KEY ("notasId") REFERENCES "notas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_a55833f2d1bf02e0eab356bffda"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_a55833f2d1bf02e0eab356bffda"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "notasId"`);
        await queryRunner.query(`ALTER TABLE "materia" ADD "notasId" integer`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "UQ_da773d29756dc87b181e748c59d" UNIQUE ("notasId")`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "FK_da773d29756dc87b181e748c59d" FOREIGN KEY ("notasId") REFERENCES "notas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
