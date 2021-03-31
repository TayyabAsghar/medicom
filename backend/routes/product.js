import express from "express";
import expressAsyncHandler from "express-async-handler";
import testData from "../testData.js";
import ProductModel from "../models/product.js";
import UserModel from "../models/user.js";
import { Admin, isAuth } from "../utils.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const name = req.query.name || "";
    const order = req.query.order || "";
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const sortOrder =
      order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : { _id: -1 };
    const count = await ProductModel.count({
      ...nameFilter,
      ...priceFilter,
    });
    const products = await ProductModel.find({
      ...nameFilter,
      ...priceFilter,
    })
      .populate() // populate("user", "user.name seller.logo")
      .sort(sortOrder);
    // .skip(pageSize * (page - 1))
    // .limit(pageSize);
    res.send({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await ProductModel.remove({});
    const buyer = await UserModel.findOne({ isAdmin: false });

    if (buyer) {
      const products = testData.products.map((product) => ({
        ...product,
      }));

      const createdProducts = await ProductModel.insertMany(products);
      res.send({ createdProducts });
    } else {
      res
        .status(500)
        .send({ message: "No seller found. first run /api/users/seed" });
    }
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id).populate();
    // populate(
    // "seller",
    // 'seller.name seller.logo seller.rating seller.numReviews'
    // )

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.post(
  "/",
  isAuth,
  Admin, //isSellerOrAdmin,
  expressAsyncHandler(async (res) => {
    const product = new ProductModel({
      name: "sample name " + Date.now(),
      image: "/images/p1.jpg",
      form: "capsule",
      brief: "This is a medicine",
      strength: 40,
      price: 0,
      description: "sample description",
      manufacturer: {
        name: "Devil",
        logo: "/images/p1.jpg",
        base: "In Hell",
        description: "It is from the beginning of the first human",
      },
      healthCondition: "Burning in hell",
      countInStock: 0,
    });
    const createdProduct = await product.save();
    res.send({ message: "Product Created", product: createdProduct });
  })
);

productRouter.put(
  "/:id",
  isAuth,
  // isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId);

    if (product) {
      product.name = req.body.name;
      product.form = req.body.form;
      product.brief = req.body.brief;
      product.strength = req.body.strength;
      product.price = req.body.price;
      product.image = req.body.image;
      product.healthCondition = req.body.healthCondition;
      product.manufacturer = req.body.manufacturer;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;

      const updatedProduct = await product.save();
      res.send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.delete(
  "/:id",
  isAuth,
  Admin,
  expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: "Product Deleted", product: deleteProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
