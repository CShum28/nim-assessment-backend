const MenuItems = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const menu = await MenuItems.getAll();
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const menu = await MenuItems.getOne(req.params.id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const menu = await MenuItems.create(req.body);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const menu = await MenuItems.updateOne(id, updateFields);
    res.json(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const menu = await MenuItems.remove(id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const searchNameAndDescription = async (req, res) => {
  try {
    const { q } = req.query;
    const menus = await MenuItems.searchNameAndDescription(q);
    res.send(menus);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  remove,
  searchNameAndDescription
};
