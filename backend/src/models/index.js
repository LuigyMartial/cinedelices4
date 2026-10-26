import Sequelize from 'sequelize';
import process from 'process';
import configObj from '../config/config.js';

import initCategory from './category.js';
import initMedia from './media.js';
import initRecipe from './recipe.js';
import initUser from './user.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = configObj[env];
const db = {};

let sequelize;
if (dbConfig.url) {
  sequelize = new Sequelize(dbConfig.url, dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

db.Category = initCategory(sequelize, Sequelize.DataTypes);
db.Media = initMedia(sequelize, Sequelize.DataTypes);
db.Recipe = initRecipe(sequelize, Sequelize.DataTypes);
db.User = initUser(sequelize, Sequelize.DataTypes);

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export const { Category, Media, Recipe, User } = db;
export { sequelize, Sequelize };
export default db;
