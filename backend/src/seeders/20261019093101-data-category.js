/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  const categories = [
    {
      name: 'Appetizer',
      description: 'Dishes to start the meal',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Main Course',
      description: 'Hearty main dishes',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Dessert',
      description: 'Sweet treats to end the meal',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Beverage',
      description: 'Cocktails and drinks inspired by cinema',
      created_at: new Date(),
      updated_at: new Date()
    }
  ];

  const existingCategories = await queryInterface.sequelize.query(
    `SELECT name FROM categories WHERE name IN (:names)`,
    {
      replacements: { names: categories.map((category) => category.name) },
      type: Sequelize.QueryTypes.SELECT
    }
  );

  const existingNames = new Set(existingCategories.map((category) => category.name));
  const categoriesToInsert = categories.filter((category) => !existingNames.has(category.name));

  if (categoriesToInsert.length > 0) {
    await queryInterface.bulkInsert('categories', categoriesToInsert, {});
  }
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('categories', {
    name: ['Appetizer', 'Main Course', 'Dessert', 'Beverage']
  }, {});
}

export default {
  up,
  down
};
