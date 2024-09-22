

import { MigrationInterface, QueryRunner } from "typeorm";

export class Test11727003428657 implements MigrationInterface {
    public name = 'Test11727003428657';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_credentials\` (\`id\` int NOT NULL, \`email\` varchar(15) NOT NULL, \`password\` varchar(20) NOT NULL, UNIQUE INDEX \`IDX_8e125b82911b4715b635dcf2fd\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`addresses\` (\`address_id\` int NOT NULL AUTO_INCREMENT, \`province\` varchar(20) NOT NULL, \`city\` varchar(20) NOT NULL, \`house_address\` varchar(20) NOT NULL, PRIMARY KEY (\`address_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recipes\` (\`recipe_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(20) NOT NULL, \`ingredients\` varchar(225) NOT NULL, \`instructions\` varchar(500) NOT NULL, \`notes\` varchar(225) NULL, \`meal_type\` enum ('Breakfast', 'Lunch', 'Dinner', 'Supper') NOT NULL DEFAULT 'Breakfast', \`date_created\` date NOT NULL, \`image\` blob NOT NULL, PRIMARY KEY (\`recipe_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ShoppingLists\` (\`shopping_list_id\` int NOT NULL AUTO_INCREMENT, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, \`shopping_list\` json NOT NULL, PRIMARY KEY (\`shopping_list_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`meal_plans\` (\`plan_id\` int NOT NULL AUTO_INCREMENT, \`day_of_week\` datetime NOT NULL, \`time\` time NOT NULL, PRIMARY KEY (\`plan_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`names\` varchar(20) NOT NULL, \`surname\` varchar(20) NOT NULL, \`phone_number\` varchar(10) NULL, \`userCredentialsId\` int NULL, UNIQUE INDEX \`REL_a096cafd0a6ef5bf28be1c63fd\` (\`userCredentialsId\`), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a096cafd0a6ef5bf28be1c63fd8\` FOREIGN KEY (\`userCredentialsId\`) REFERENCES \`user_credentials\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a096cafd0a6ef5bf28be1c63fd8\``);
        await queryRunner.query(`DROP INDEX \`REL_a096cafd0a6ef5bf28be1c63fd\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`meal_plans\``);
        await queryRunner.query(`DROP TABLE \`ShoppingLists\``);
        await queryRunner.query(`DROP TABLE \`recipes\``);
        await queryRunner.query(`DROP TABLE \`addresses\``);
        await queryRunner.query(`DROP INDEX \`IDX_8e125b82911b4715b635dcf2fd\` ON \`user_credentials\``);
        await queryRunner.query(`DROP TABLE \`user_credentials\``);
    }
}