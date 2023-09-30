const mongoose = require("../db.js");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
menuItemsSchema.set("toJSON", {
  virtuals: true
});
// menu model
const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

const getAll = async () => {
  try {
    const menuItems = await MenuItems.find();
    return menuItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const menuItem = await MenuItems.findById(id);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const menuItem = await MenuItems.create(body);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const updateOne = async (id, updateFields) => {
  try {
    const menuItem = await MenuItems.findOneAndUpdate(
      id,
      {
        $set: {
          ...updateFields,
          updatedAt: new Date() // Manually set the updatedAt field
        }
      },
      { new: true }
    );
    return menuItem;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    await MenuItems.findOneAndDelete(id);
    return id;
  } catch (error) {
    return error;
  }
};

const searchNameAndDescription = async (q) => {
  try {
    const menuItems = await MenuItems.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ]
    });

    return menuItems;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  remove,
  searchNameAndDescription,
  MenuItems
};
