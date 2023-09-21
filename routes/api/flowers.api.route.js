const router = require('express').Router();
const { Flower } = require('../../db/models');
const Card = require('../../components/Card');

router.get('/', async (req, res) => {
  const flowers = await Flower.findAll();
  res.json(flowers);
});

router.get('/:flowerId', async (req, res) => {
  const { flowerId } = req.params;
  const flower = await Flower.findOne({ where: { id: flowerId } });
  res.json(flower);
});

router.post('/', async (req, res) => {
  try {
    const { name, url, description } = req.body;
    if (name && url && description) {
      const newFlower = await Flower.create({
        name,
        url,
        description,
        userId: req.session.user.id,
      });
      const html = res.renderComponent(
        Card,
        { flower: newFlower },
        { htmlOnly: true },
      );
      res.status(201).json({ message: 'ok', html });
    } else {
      res.status(400).json({ message: 'заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:idFlower', async (req, res) => {
  try {
    const { idFlower } = req.params;
    const flower = await Flower.findOne({ where: { id: idFlower } });
    if (req.session.user.id === flower.userId) {
      const data = await Flower.destroy({ where: { id: idFlower } });
      res.status(200).json({ data });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:idFlower', async (req, res) => {
  try {
    const { idFlower } = req.params;
    const { name, url, description } = req.body;
    const flower = await Flower.findOne({ where: { id: idFlower } });
    if (req.session.user.id === flower.userId) {
      if (name && url && description) {
        const data = await Flower.update(
          { name, url, description },
          { where: { id: idFlower } },
        );
        res.status(200).json({ data });
      } else {
        res.status(400).json({ message: 'zapolni vse polya' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
