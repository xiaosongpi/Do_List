const userService = require('../services/userServices');

const getAllUsers = async (req, res, next) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json({
            message: 'Users fetch success',
            data: users
        });
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = userService.getUserById(id);
        res.status(200).json({
            message: `User with ID ${id} found`,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.query;
        const user = userService.getUserByEmail(email);
        res.status(200).json({
            message: `User with email ${email} found`,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.query;
        const user = userService.getUserByUsername(username);
        res.status(200).json({
            message: `User with username ${username} found`,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { username, email, password, passwordConfirm } = req.body;
        const user = userService.createUser(username, email, password, passwordConfirm);
        res.status(200).json({
            message: 'Success to create account',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const updateUserPassword = async (req, res, next) => {
    try {
        const { email, password, passwordConfirm } = req.body;
        const user = userService.updateUserPassword(email, password, passwordConfirm);
        res.status(200).json({
            message: 'Success to update password',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = userService.deleteUser(id);
        res.status(200).json({
            message: 'Success to delete account',
            data: user
        });
    } catch (err) {
        next(err)
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByUsername,
    createUser,
    updateUserPassword,
    deleteUser
};
