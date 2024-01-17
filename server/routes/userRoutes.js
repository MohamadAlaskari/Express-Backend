const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Beachten Sie die korrekte Schreibweise des Controllers.

router.get('/get', userController.getUser);
router.post('/create', userController.createUser);
router.put('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);

module.exports = router;
