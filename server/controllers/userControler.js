const userModel = require('./../models/mysql/userModel');
const ValidationError = require('./../middleware/ValidationError');
const AppError = require('./../middleware/AppError');

// Get a list of users or a single user
const getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = userId ? await userModel.findById(userId) : await userModel.findAll();

        if (!user) {
            throw new ValidationError("User not found");
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Create a new user
const createUser = async (req, res, next) => {
    try {
        const userData = req.body;
        // Validate userData here if necessary

        const newUser = await userModel.create(userData);

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

// Update an existing user
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const updateData = req.body;

        const updatedUser = await userModel.update(userId, updateData);

        if (!updatedUser) {
            throw new ValidationError("User update failed");
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// Delete a user
const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const success = await userModel.delete(userId);

        if (!success) {
            throw new ValidationError("User deletion failed");
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
