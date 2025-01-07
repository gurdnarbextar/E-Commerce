import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    //Add other fields like description, category, brand, countInStock, rating, numReviews etc. as needed
  },
  {
    timestamps: true, // this will add createdAt and updatedAt fields.
  }
);

const Product = mongoose.model("Product", productSchema); // this will create a collection named products

export default Product;
