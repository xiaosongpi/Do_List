const CustomError = require('../utils/CustomError');
const userModel = require('../models/userModels');

const getAllUsers = async () => {
    const list = await userModel.findAllUsers();
    if (!list || list.length === 0) {
        throw new CustomError('No users found', 404);
    }
    return list;
};

const getUserById = async (id) => {
    if (!id) {
        throw new CustomError('ID is required', 400);
    }

    const detail = await userModel.findUserById(id);
    if (!detail) {
        throw new CustomError(`User with ID ${id} not found`, 404);
    }

    return detail;
};

const getUserByEmail = async (email) => {
    if (!email) {
        throw new CustomError('Email is required', 400);
    }

    const detail = await userModel.findUserByEmail(email);
    if (!detail) {
        throw new CustomError(`User with email ${email} not found`, 404);
    }

    return detail;
};

const getUserByUsername = async (username) => {
    if (!username) {
        throw new CustomError('Username is required', 400);
    }

    const detail = await userModel.findUserByUsername(username);
    if (!detail) {
        throw new CustomError(`User with username ${username} not found`, 404);
    }

    return detail;
};

const createUser = async (username, email, password, passwordConfirm) => {
    if (!username) {
        throw new CustomError('Username is required', 400);
    }
    if (!email) {
        throw new CustomError('Email is required', 400);
    }
    if (!password) {
        throw new CustomError('Password is required', 400);
    }
    if (!passwordConfirm) {
        throw new CustomError('Password confirmation is required', 400);
    }
    if (password !== passwordConfirm) {
        throw new CustomError('Passwords do not match', 400);
    }

    const result = await userModel.createUser(username, email, password);
    if (!result) {
        throw new CustomError('Failed to create account', 400);
    }

    return result;
};

const updateUserPassword = async (email, password, passwordConfirm) => {
    if (!email) {
        throw new CustomError('Email is required', 400);
    }
    if (!password) {
        throw new CustomError('Password is required', 400);
    }
    if (!passwordConfirm) {
        throw new CustomError('Password confirmation is required', 400);
    }
    if (password !== passwordConfirm) {
        throw new CustomError('Passwords do not match', 400);
    }

    const result = await userModel.updateUserByEmail(email, password);
    if (!result) {
        throw new CustomError('Failed to update password', 400);
    }

    return result;
};

const deleteUser = async (id) => {
    if (!id) {
        throw new CustomError('ID is required', 400);
    }

    const result = await userModel.deleteUserById(id);
    if (!result) {
        throw new CustomError('Failed to delete account', 400);
    }

    return result;
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
