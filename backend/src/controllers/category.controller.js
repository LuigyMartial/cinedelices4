import { Category } from "../models/index.js";

// Permer de récupérer toutes les catégories
export async function getAll(req, res) {
    try {
        // grace a sequelize, on récup ici un tableau de toutes les catégories de la base de donnée
        const categories = await Category.findAll();
        // renvoie la liste des categories au format json avec le status HTTP 200
        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json(error);
    }
}


