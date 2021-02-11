import express from "express";


const router = express.Router();

// // controllers
import { requireSign } from "../middleware";
import { createConnectAccount } from "../controllers/stripe";

router.post("/create-connect-account", requireSign, createConnectAccount);

module.exports = router;
