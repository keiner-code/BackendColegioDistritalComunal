import { MigrationInterface, QueryRunner } from "typeorm";

export class init1670189214404 implements MigrationInterface {
    name = 'init1670189214404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notas" ("id" SERIAL NOT NULL, "nota1" integer NOT NULL, "nota2" integer NOT NULL, "nota3" integer NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_1f3d47f136b291534c128bb4516" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "apellido" character varying(255) NOT NULL, "cedula" integer NOT NULL, "rol" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "materia" ("id" SERIAL NOT NULL, "materia" character varying NOT NULL, "descripcion" text NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a8b21a045c6a7d9cfffc3a2ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "curso" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_76073a915621326fb85f28ecc5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horario" ("id" SERIAL NOT NULL, "dia" character varying NOT NULL, "horaInicio" character varying NOT NULL, "horaFin" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "materiaId" integer, "cursoId" integer, CONSTRAINT "REL_19bb0c847367117134d905f77f" UNIQUE ("cursoId"), CONSTRAINT "PK_3c89ff4250bf835ce1f861313c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "materia_user_user" ("materiaId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_161d75b81db0f8378fc072e3eb8" PRIMARY KEY ("materiaId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9d83c296d5ccf08ea50c578ab1" ON "materia_user_user" ("materiaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9981a1f1cd81d95732f720b8af" ON "materia_user_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "notas" ADD CONSTRAINT "FK_4037433a40a6d913c18a9ea6948" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "FK_2c31906f1be137431292d0766e9" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "FK_19bb0c847367117134d905f77f6" FOREIGN KEY ("cursoId") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "materia_user_user" ADD CONSTRAINT "FK_9d83c296d5ccf08ea50c578ab1f" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "materia_user_user" ADD CONSTRAINT "FK_9981a1f1cd81d95732f720b8af6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materia_user_user" DROP CONSTRAINT "FK_9981a1f1cd81d95732f720b8af6"`);
        await queryRunner.query(`ALTER TABLE "materia_user_user" DROP CONSTRAINT "FK_9d83c296d5ccf08ea50c578ab1f"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "FK_19bb0c847367117134d905f77f6"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "FK_2c31906f1be137431292d0766e9"`);
        await queryRunner.query(`ALTER TABLE "notas" DROP CONSTRAINT "FK_4037433a40a6d913c18a9ea6948"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9981a1f1cd81d95732f720b8af"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9d83c296d5ccf08ea50c578ab1"`);
        await queryRunner.query(`DROP TABLE "materia_user_user"`);
        await queryRunner.query(`DROP TABLE "horario"`);
        await queryRunner.query(`DROP TABLE "curso"`);
        await queryRunner.query(`DROP TABLE "materia"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "notas"`);
    }

}
