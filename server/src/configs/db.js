require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    max: process.env.DATABASE_MAX
});

(async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('✅ Koneksi berhasil:', res.rows[0]);
    } catch (err) {
        console.error('❌ Koneksi gagal:', err);
    }
})();

module.exports = pool;