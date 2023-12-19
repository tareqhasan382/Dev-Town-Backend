/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import ShopModel from "./shop.model";
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await ShopModel.create(data);
    return res.json({
      status: "true",
      message: "Product Created Successfully.",
      data: result,
    });
  } catch (error) {
    return res.json({ status: "false", message: "Failed to create Product." });
  }
});

export const shopController = {
  createProduct,
};
