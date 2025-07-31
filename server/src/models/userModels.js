const pool = require('../configs/db');

const findAllUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const findUserById = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

const findUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

const findUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username LIKE $1', [`%${username}%`]);
    return result.rows;
};

const createUser = async (username, email, password) => {
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
    return result.rows[0];
}

const updateUserByEmail = async (email, password) => {
    const result = await pool.query('UPDATE users SET password = $1 WHERE email = $2', [password, email]);
    return result.rows[0];
}

const deleteUserById = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return result.rowCount > 0;
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    findUserByUsername,
    createUser,
    updateUserByEmail,
    deleteUserById,
}