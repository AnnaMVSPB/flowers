/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Flowers', [
      {
        name: 'Мухоловка',
        userId: 1,
        description: 'Если летом открыть окно,то сама себе найдет пропитание',
        url: 'https://cdn1.ozone.ru/s3/multimedia-l/6424276509.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Свадебный букетик',
        userId: 1,
        description: 'Вот такой букетик я сделала сама',
        url: 'https://cveti-amura.ru/upload/iblock/34a/34a1efe40393a7c145a800472a0ecad5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Соленый',
        userId: 1,
        description: 'Такой букетик можно подарить мужу на др',
        url: 'https://shop-cdn1-2.vigbo.tech/shops/45494/products/20282622/images/2-78c1323058f2e92be0cf56b99f4d16ab.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Flowers', null, {});
  },
};
