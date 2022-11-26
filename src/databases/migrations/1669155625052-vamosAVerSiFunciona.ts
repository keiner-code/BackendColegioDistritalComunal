import { MigrationInterface, QueryRunner } from "typeorm";

export class vamosAVerSiFunciona1669155625052 implements MigrationInterface {
    name = 'vamosAVerSiFunciona1669155625052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" ADD "cursoId" integer`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "UQ_19bb0c847367117134d905f77f6" UNIQUE ("cursoId")`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "FK_19bb0c847367117134d905f77f6" FOREIGN KEY ("cursoId") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "FK_19bb0c847367117134d905f77f6"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "UQ_19bb0c847367117134d905f77f6"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "cursoId"`);
    }

}
