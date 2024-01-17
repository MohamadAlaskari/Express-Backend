const userModel = require('./../models/mysql/userModel')

getUser = (req, res, next) => {
    try {

        // Assuming getting is successful
        res.status(200).res("users");// 200 ok
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
}

createUser = (req, res, next) => {
    try {

        // Assuming creating is successful
        res.status(201).res("user Created");// 201 ok
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
}

updateUser = (req, res, next) => {
    try {

        // Assuming update is successful
        res.status(200).res("user updated");// 200 ok
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
}

deleteUser = (req, res, next) => {
    try {

        // Assuming delete is successful
        res.status(204).res();// 200 ok
    } catch (error) {
        next(error); // Forward error to error handling middleware
    }
}

export { getUser, createUser, updateUser, deleteUser }