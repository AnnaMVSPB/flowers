const { Op } = require('sequelize');
const { Filling, Pie, Compound } = require('./db/models');

const arr = ['колбаска', 'картоха', 'капуста', 'повидло'];
async function base() {
//   const filling = await Promise.all(arr.map((el) => Filling.create({ name: el })));
//   const fillings = await Filling.findAll({ raw: true });
//   const filling = await Filling.findOne({ raw: true, attributes: ['name'] });
// const filling = await Filling.findByPk(2);
//   const res = await Filling.destroy({ where: { name: 'колбаска' } });
  const res = await Filling.update({ name: 'колбаска' }, { where: { id: { [Op.gt]: 1 } } });
  console.log(res);
}

base();
