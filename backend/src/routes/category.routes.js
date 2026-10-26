import express from 'express';
import { getAll } from '../controllers/category.controller.js';

// Permet de déclarer un objet de type Router qui va permettre de déclarer des routes
const router = express.Router();

// Route qui permet de récupérer toutes les catégories
router.get('/', getAll);

export default router;