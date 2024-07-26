const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title of your product!"],
    },
    name: {
        type: String,
        required: [true, "Please enter the product name!"],
      },
    price: {
      type: Number,
      required: [true, "Please enter the price of the product!"],
    },
    quantityStock: {
      type: Number,
      required: [true, "Please enter the product quantity!"],
    },
    category: {
      type: String,
      required: [true, "Please enter the category!"],
    },
    description: {
      type: String,
      required: [true, "Por favor, introduza a descrição do produto!"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productsSchema);
