import { MigrationInterface, QueryRunner } from "typeorm";

export class correcionrelation1668993083372 implements MigrationInterface {
    name = 'correcionrelation1668993083372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notas" DROP CONSTRAINT "FK_25526d190c0827b9b28abea3578"`);
        await queryRunner.query(`ALTER TABLE "notas" DROP COLUMN "materiaId"`);
        await queryRunner.query(`ALTER TABLE "materia" ADD "notas_id" integer`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "UQ_4b3044bc040f2e2b5e2f47230f8" UNIQUE ("notas_id")`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "FK_4b3044bc040f2e2b5e2f47230f8" FOREIGN KEY ("notas_id") REFERENCES "notas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "FK_4b3044bc040f2e2b5e2f47230f8"`);
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "UQ_4b3044bc040f2e2b5e2f47230f8"`);
        await queryRunner.query(`ALTER TABLE "materia" DROP COLUMN "notas_id"`);
        await queryRunner.query(`ALTER TABLE "notas" ADD "materiaId" integer`);
        await queryRunner.query(`ALTER TABLE "notas" ADD CONSTRAINT "FK_25526d190c0827b9b28abea3578" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
