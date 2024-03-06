import express from "express";
import { addUser } from "../controller/user.controller.js";

const route = express.Router();

route.post('/user', addUser );

export default route;