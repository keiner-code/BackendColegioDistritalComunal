import { MigrationInterface, QueryRunner } from "typeorm";

export class otramigracion1669159696653 implements MigrationInterface {
    name = 'otramigracion1669159696653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "materia_user_user" ("materiaId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_161d75b81db0f8378fc072e3eb8" PRIMARY KEY ("materiaId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9d83c296d5ccf08ea50c578ab1" ON "materia_user_user" ("materiaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9981a1f1cd81d95732f720b8af" ON "materia_user_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "materia_user_user" ADD CONSTRAINT "FK_9d83c296d5ccf08ea50c578ab1f" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "materia_user_user" ADD CONSTRAINT "FK_9981a1f1cd81d95732f720b8af6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia_user_user" DROP CONSTRAINT "FK_9981a1f1cd81d95732f720b8af6"`);
        await queryRunner.query(`ALTER TABLE "materia_user_user" DROP CONSTRAINT "FK_9d83c296d5ccf08ea50c578ab1f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9981a1f1cd81d95732f720b8af"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9d83c296d5ccf08ea50c578ab1"`);
        await queryRunner.query(`DROP TABLE "materia_user_user"`);
    }

}
