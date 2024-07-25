const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor, introduza o título do seu produto"],
    },
    name: {
        type: String,
        required: [true, "Por favor, introduza o nome do produto"],
      },
    price: {
      type: Number,
      required: [true, "Por favor, introduza o preço do produto"],
    },
    quantityStock: {
      type: Number,
      required: [true, "Por favor, introduza a quantidade do produto"],
    },
    category: {
      type: String,
      required: [true, "Por favor, introduza a categoria"],
    },
    description: {
      type: String,
      required: [true, "Por favor, introduza a descrição do produto"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productsSchema);
