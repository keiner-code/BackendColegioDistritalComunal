import { MigrationInterface, QueryRunner } from "typeorm";

export class relationNotaMateria1668991816841 implements MigrationInterface {
    name = 'relationNotaMateria1668991816841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notas" ADD "materiaId" integer`);
        await queryRunner.query(`ALTER TABLE "notas" ADD CONSTRAINT "FK_25526d190c0827b9b28abea3578" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notas" DROP CONSTRAINT "FK_25526d190c0827b9b28abea3578"`);
        await queryRunner.query(`ALTER TABLE "notas" DROP COLUMN "materiaId"`);
    }

}
