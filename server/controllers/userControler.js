const userModel = require('./../models/mysql/userModel');

const getUser = (req, res, next) => {
    try {
        // Assuming getting is successful
        res.status(200).send("users"); // 200 OK
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
};

const createUser = (req, res, next) => {
    try {
        // Assuming creating is successful
        res.status(201).send("user Created"); // 201 Created
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
};

const updateUser = (req, res, next) => {
    try {
        // Assuming update is successful
        res.status(200).send("user updated"); // 200 OK
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
};

const deleteUser = (req, res, next) => {
    try {
        // Assuming delete is successful
        res.status(204).send(); // 204 No Content
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
