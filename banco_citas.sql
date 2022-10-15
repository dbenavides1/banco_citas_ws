CREATE TABLE "citas" (
  "id_cita" serial4,
  "id_clie" int4 NOT NULL,
  "id_usu" int4 NOT NULL,
  "id_ventanilla" int4 NOT NULL,
  "fec_cita" date NOT NULL,
  "hora" time NOT NULL,
  "estado" varchar(50) NOT NULL,
  "fec_reg" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "id_cita" PRIMARY KEY ("id_cita")
);

CREATE TABLE "clientes" (
  "id_clie" serial4,
  "nombres" varchar(100) NOT NULL,
  "apellidos" varchar(100) NOT NULL,
  "tipo_dni" varchar(100),
  "dni" varchar(20),
  "sexo" bool,
  "municipio" varchar(100),
  "direccion" varchar(255),
  "tel" varchar(20),
  "fec_nac" date DEFAULT NULL,
  "email" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "fec_reg" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "id_clie" PRIMARY KEY ("id_clie")
);

CREATE TABLE "pqrs" (
  "id_pqrs" serial4,
  "id_clie" int4 NOT NULL,
  "tipo" varchar(50) NOT NULL,
  "estado" varchar(100) NOT NULL,
  "fec_reg" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "id_pqrs" PRIMARY KEY ("id_pqrs")
);

CREATE TABLE "usuarios" (
  "id_usu" serial4,
  "nombres" varchar(100) NOT NULL,
  "apellidos" varchar(100) NOT NULL,
  "tipo_dni" varchar(100),
  "dni" varchar(20),
  "sexo" bool,
  "municipio" varchar(100),
  "direccion" varchar(255),
  "tel" varchar(20),
  "fec_nac" date DEFAULT NULL,
  "email" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "rol" varchar(100),
  "fec_reg" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "id_usu" PRIMARY KEY ("id_usu")
);

CREATE TABLE "ventanillas" (
  "id_ventanilla" serial4,
  "nom_ventanilla" varchar(255) NOT NULL,
  CONSTRAINT "id_ventanilla" PRIMARY KEY ("id_ventanilla")
);

ALTER TABLE "citas" ADD CONSTRAINT "clie_citas" FOREIGN KEY ("id_clie") REFERENCES "clientes" ("id_clie") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "citas" ADD CONSTRAINT "usu_citas" FOREIGN KEY ("id_usu") REFERENCES "usuarios" ("id_usu") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "citas" ADD CONSTRAINT "ventan_citas" FOREIGN KEY ("id_ventanilla") REFERENCES "ventanillas" ("id_ventanilla") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "pqrs" ADD CONSTRAINT "clie_pqrs" FOREIGN KEY ("id_clie") REFERENCES "clientes" ("id_clie") ON DELETE CASCADE ON UPDATE CASCADE;

