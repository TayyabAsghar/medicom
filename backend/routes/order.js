import express from "express";
import expressAsyncHandler from "express-async-handler";
import OrderModel from "../models/order.js";
import { Admin, notAdmin, isAuth } from "../utils.js";

const orderRouter = express.Router();
orderRouter.get(
  "/",
  isAuth,
  notAdmin, //isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const buyer = req.query.buyer || "";
    const buyerFilter = buyer ? { buyer } : {};

    const orders = await OrderModel.find({ ...buyerFilter }).populate(
      "user",
      "name"
    );
    res.send(orders);
  })
);
orderRouter.get(
  "/mine",
  isAuth,
  notAdmin, // empty
  expressAsyncHandler(async (req, res) => {
    const orders = await OrderModel.find({ user: req.user._id });
    res.send(orders);
  })
);

orderRouter.post(
  "/",
  isAuth,
  notAdmin, // empty
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new OrderModel({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentDetails: req.body.paymentDetails,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        placedAt: Date.now(),
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

orderRouter.delete(
  "/:id",
  isAuth,
  Admin,
  expressAsyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: "Order Deleted", order: deleteOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

orderRouter.put(
  "/:id/deliver",
  isAuth,
  Admin,
  expressAsyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.send({ message: "Order Delivered", order: updatedOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default orderRouter;
