const Category = require("../models/category");

exports.getCategoryHome = async (req, res) => {
  try {
    const category = await Category.find();

    res.json({ category });
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.find({ creator: req.user.id });

    res.json({ category });
  } catch (error) {
    console.log(error);
  }
};

exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    res.json({ category });
  } catch (error) {
    console.log(error);
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    let category = await Category.findOne({ name });

    if (category) {
      return res.status(404).json({ msg: "La categoria ya existe" });
    }

    category = new Category(req.body);

    // get creator from the user created during authentication
    category.creator = req.user.id;
    category.save();

    res.json({ category });
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    return res.status(400).json({ msg: "Categoria no encontrada" });
  }

  // check that the creator user is updating the category
  if (category.creator.toString() !== req.user.id.toString()) {
    return res.status(400).json({ msg: "Accion no valida para este usuario" });
  }

  category.name = req.body.name || category.name;
  category.image = req.body.image || category.image;

  category.save();

  res.json({ category });

  /*try {
  } catch (error) {
    console.log(error);
  }*/
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });

    res.json({ msg: "Categoria eliminada" });
  } catch (error) {
    console.log(error);
  }
};
