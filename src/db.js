import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	},
	synchronize: true,
	logging: false,
});