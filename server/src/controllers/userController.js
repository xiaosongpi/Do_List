const userService = require('../services/userServices');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: users
        });
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.query;
        const user = await userService.getUserByEmail(email);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.query;
        const user = await userService.getUserByUsername(username);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { username, email, password, passwordConfirm } = req.body;
        const newUser = await userService.createUser(username, email, password, passwordConfirm);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });
    } catch (err) {
        next(err);
    }
};

const updateUserPassword = async (req, res, next) => {
    try {
        const { email, password, passwordConfirm } = req.body;
        const updatedUser = await userService.updateUserPassword(email, password, passwordConfirm);
        res.status(200).json({
            success: true,
            message: 'Password updated successfully',
            data: updatedUser
        });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await userService.deleteUser(id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (err) {
        next(err);
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
