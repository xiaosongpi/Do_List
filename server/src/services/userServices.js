const CustomError = require('../utils/CustomError');
const userModel = require('../models/userModels');

const getAllUsers = async () => {
    const users = await userModel.findAllUsers();
    if (!users || users.length === 0) {
        throw new CustomError('There is no users found', 404);
    }
    return users;
};

const getUserById = async (id) => {
    if (!id) {
        throw new CustomError('ID is required', 400);
    }
    const user = await userModel.findUserById(id);
    if (!user) {
        throw new CustomError(`User with ID: ${id}, not found`, 404);
    }
    return user;
};

const getUserByEmail = async (email) => {
    if (!email) {
        throw new CustomError('Email is required', 400);
    }
    const user = await userModel.findUserByEmail(email);
    if (!user) {
        throw new CustomError(`User with email: ${email}, not found`, 404);
    }
    return user;
};

const getUserByUsername = async (username) => {
    if (!username) {
        throw new CustomError('Username is required', 400);
    }
    const user = await userModel.findUserByUsername(username);
    if (!user) {
        throw new CustomError(`User with username: ${username}, not found`, 404);
    }
    return user;
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
        throw new CustomError('Password confirm is required', 400);
    }
    if (password !== passwordConfirm) {
        throw new CustomError("Password doesn't match", 400);
    }

    const user = await userModel.createUser(username, email, password);
    if (!user) {
        throw new CustomError('Failed to create account', 400);
    }
    return user;
};

const updateUserPassword = async (email, password, passwordConfirm) => {
    if (!email) {
        throw new CustomError('Email is required', 400);
    }
    if (!password) {
        throw new CustomError('Password is required', 400);
    }
    if (!passwordConfirm) {
        throw new CustomError('Password confirm is required', 400);
    }
    if (password !== passwordConfirm) {
        throw new CustomError("Password doesn't match", 400);
    }

    const user = await userModel.updateUserByEmail(email, password);
    if (!user) {
        throw new CustomError('Failed to update user password', 400);
    }
    return user;
};

const deleteUser = async (id) => {
    if (!id) {
        throw new CustomError('ID is required', 400);
    }
    const user = await userModel.deleteUserById(id);
    if (!user) {
        throw new CustomError('Failed to delete account', 400);
    }
    return user;
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
