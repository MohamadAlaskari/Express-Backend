const AppError = require('./AppError');

class ValidationError extends AppError {
    constructor(message) {
        super(message, 400, 'VALIDATION_ERROR', true, 'Validierungsfehler');
    }
}

module.exports = ValidationError;
