module.exports = {
	drive: process.env.DB_CONNECTION || 'mysql',
	connections: [
		{
			name: 'mysql',
			host: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || '3306',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASS || '',
			database: process.env.DB_DATABASE || 'test'
		},
		{
			name: 'mongodb',
			host: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || '27017',
			database: process.env.DB_DATABASE || 'test'
		},
		{
			name: 'mssql',
			server: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || '1433',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASS || '',
			database: process.env.DB_DATABASE || 'test'
		}
	]
};