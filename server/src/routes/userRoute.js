const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/search/email', userController.getUserByEmail);
router.get('/search/username', userController.getUserByUsername);
router.post('/', userController.createUser);
router.put('/password', userController.updateUserPassword);
router.delete('/:id', userController.deleteUser);

module.exports = router;
