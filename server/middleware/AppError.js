class AppError extends Error {
    constructor(message, status, code = 'GENERIC', isOperational = true, userMessage = 'Ein Fehler ist aufgetreten') {
        super(message);
        this.status = status;
        this.code = code;
        this.isOperational = isOperational;
        this.userMessage = userMessage; // Benutzerfreundliche Nachricht
        Error.captureStackTrace(this, this.constructor);
    }

    logError() {
        // Integration mit fortgeschrittenem Logging-System könnte hier erfolgen
        console.error(this);
    }
}

module.exports = AppError;
