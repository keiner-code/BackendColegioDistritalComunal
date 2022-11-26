import { MigrationInterface, QueryRunner } from "typeorm";

export class corregirHorarioDate1669082086642 implements MigrationInterface {
    name = 'corregirHorarioDate1669082086642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "horaInicio"`);
        await queryRunner.query(`ALTER TABLE "horario" ADD "horaInicio" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "horaFin"`);
        await queryRunner.query(`ALTER TABLE "horario" ADD "horaFin" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "horaFin"`);
        await queryRunner.query(`ALTER TABLE "horario" ADD "horaFin" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "horario" DROP COLUMN "horaInicio"`);
        await queryRunner.query(`ALTER TABLE "horario" ADD "horaInicio" date NOT NULL`);
    }

}
