import "dotenv/config";
import express from "express";
import categoryRoutes from './src/routes/category.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Permet de déclarer les routes définies dans le fichier routes
app.use('/categories', categoryRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});