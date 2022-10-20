const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Bhavesh1129#",
    port: 5432,
    database: "atlan"
});

module.exports = pool;