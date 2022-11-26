import { MigrationInterface, QueryRunner } from "typeorm";

export class correcion1668995371618 implements MigrationInterface {
    name = 'correcion1668995371618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "FK_4b3044bc040f2e2b5e2f47230f8"`);
        await queryRunner.query(`ALTER TABLE "materia" RENAME COLUMN "notas_id" TO "notasId"`);
        await queryRunner.query(`ALTER TABLE "materia" RENAME CONSTRAINT "UQ_4b3044bc040f2e2b5e2f47230f8" TO "UQ_da773d29756dc87b181e748c59d"`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "FK_da773d29756dc87b181e748c59d" FOREIGN KEY ("notasId") REFERENCES "notas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia" DROP CONSTRAINT "FK_da773d29756dc87b181e748c59d"`);
        await queryRunner.query(`ALTER TABLE "materia" RENAME CONSTRAINT "UQ_da773d29756dc87b181e748c59d" TO "UQ_4b3044bc040f2e2b5e2f47230f8"`);
        await queryRunner.query(`ALTER TABLE "materia" RENAME COLUMN "notasId" TO "notas_id"`);
        await queryRunner.query(`ALTER TABLE "materia" ADD CONSTRAINT "FK_4b3044bc040f2e2b5e2f47230f8" FOREIGN KEY ("notas_id") REFERENCES "notas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
