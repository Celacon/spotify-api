const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas para clientes
router.post('/', authMiddleware, clientsController.createClient);
router.get('/', authMiddleware, clientsController.getAllClients);
router.get('/:id', authMiddleware, clientsController.getClientById);
router.put('/:id', authMiddleware, clientsController.updateClient);
router.delete('/:id', authMiddleware, clientsController.deleteClient);

module.exports = router;
