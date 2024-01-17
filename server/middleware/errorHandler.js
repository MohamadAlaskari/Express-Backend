const AppError = require('./AppError');

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        err.logError();
    } else {
        console.error(err); // Loggen von nicht AppError-Fehlern
    }

    const response = {
        message: process.env.NODE_ENV === 'development' ? err.message : err.userMessage,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    };

    res.status(err.status || 500).json(response);
};

module.exports = errorHandler;
