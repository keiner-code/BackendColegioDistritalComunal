import { MigrationInterface, QueryRunner } from "typeorm";

export class relationmateria1668998948657 implements MigrationInterface {
    name = 'relationmateria1668998948657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" ADD "materiaId" integer`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "FK_2c31906f1be137431292d0766e9" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "FK_2c31906f1be137431292d0766e9"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "materiaId"`);
    }

}
