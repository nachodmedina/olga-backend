
import enviroment = require('dotenv');
import { User } from 'src/dto/user';
import { ConnectionOptions } from 'tls';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
enviroment.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export default {
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [User],
    synchronize: false,
    migrationsRun: true,
    logging: true,
} as ConnectionOptions;

