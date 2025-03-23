const express = require('express');
const { getPedidos } = require('../controllers/pedidoController');
const { verificarAutenticacion, verificarRolAdmin } = require('../../middlewares/authMiddleware'); // Desde 'src/routes'


const router = express.Router();

// Ruta protegida: Solo administradores pueden acceder
router.get('/todos', verificarAutenticacion, verificarRolAdmin, getPedidos);

module.exports = router;
