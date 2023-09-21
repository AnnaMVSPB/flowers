const router = require('express').Router();
const { Flower } = require('../../db/models');
const FlowersList = require('../../components/FlowersList');
const FlowersPage = require('../../components/FlowerPage');
const UpdateFlowers = require('../../components/UpdateFlowers');

router.get('/', async (req, res) => {
  try {
    const flowers = await Flower.findAll();
    res.status(200).renderComponent(FlowersList, {
      title: 'FlowersList',
      flowers,
    });
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/:idFlower', async (req, res) => {
  try {
    const { idFlower } = req.params;
    const flower = await Flower.findOne({ where: { id: idFlower } });

    res.renderComponent(FlowersPage, {
      title: 'FlowersPage',
      flower,
    });
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/formUpdate/:flowerId', async (req, res) => {
  const { flowerId } = req.params;
  const flower = await Flower.findOne({ where: { id: flowerId } });
  res.renderComponent(UpdateFlowers, { title: 'Form Update', flower });
});

module.exports = router;
