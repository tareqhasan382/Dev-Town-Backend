import express from "express";
import { shopController } from "./shop.controller";
import { authVerify } from "../../middlewares/authVerify";
import { ENUM_ROLE } from "../user/user.interface";
const router = express.Router();

//   router.get('/user/:id', UserController.getUser),
//   router.patch('/user/:id', UserController.updateUser)
// router.post("/login", UserController.login);
router.post(
  "/addProduct",
  authVerify(ENUM_ROLE.ADMIN, ENUM_ROLE.SELLER, ENUM_ROLE.USER),
  shopController.createProduct
);
export const ShopRoute = router;
