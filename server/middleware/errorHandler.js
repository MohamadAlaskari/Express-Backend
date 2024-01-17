module.exports = (err, req, res, next) => {
    
    const status = err.status || 500;
    const message = err.message || 'An internal server error has occurred.';
    res.status(status).send(message);
};