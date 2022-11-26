import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1668821243349 implements MigrationInterface {
    name = 'createTable1668821243349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" RENAME COLUMN "curso" TO "rol"`);
        await queryRunner.query(`CREATE TABLE "materia" ("id" SERIAL NOT NULL, "materia" character varying NOT NULL, "descripcion" text NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a8b21a045c6a7d9cfffc3a2ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "director" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "cedula" integer NOT NULL, "rol" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b85b179882f31c43324ef124fea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "apellido" character varying(255) NOT NULL, "cedula" integer NOT NULL, "rol" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notas" ("id" SERIAL NOT NULL, "nota1" integer NOT NULL, "nota2" integer NOT NULL, "nota3" integer NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_1f3d47f136b291534c128bb4516" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "horario" ("id" SERIAL NOT NULL, "dia" character varying NOT NULL, "horaInicio" date NOT NULL, "horaFin" date NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_3c89ff4250bf835ce1f861313c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "curso" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_76073a915621326fb85f28ecc5d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "curso"`);
        await queryRunner.query(`DROP TABLE "horario"`);
        await queryRunner.query(`DROP TABLE "notas"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "director"`);
        await queryRunner.query(`DROP TABLE "materia"`);
        await queryRunner.query(`ALTER TABLE "students" RENAME COLUMN "rol" TO "curso"`);
    }

}
