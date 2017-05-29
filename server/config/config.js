var rootPath = require('../../root');
console.log('the tootpath is now', rootPath);
module.exports = {
    developement: {
        db: 'postgres://nuru:@localhost:5432/nairamarketdb',
        host: 'localhost',
        port: process.env.PORT || 3030,
        username: "nuru",
        password: 'XY3f8FlsD4oL',
        database: "hantsitvforum_db",
        dbPort: 5433,
        dialect: "postgres"

    },
    production: {
        db: 'dbLink',
        username: "nuru",
        database: "database",
        dialect: "postgres",
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port     : process.env.RDS_PORT || 5432
    },
};