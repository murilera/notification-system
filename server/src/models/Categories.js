const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: ['Sports', 'Finance', 'Movies'],
      message: '{VALUE} is not supported at the moment'
    }
  },
});

const Categories = mongoose.models.Categories || mongoose.model('Categories', CategoriesSchema);

module.exports = {
  Categories
}