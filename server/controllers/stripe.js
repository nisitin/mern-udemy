import User from "../models/User";
import Stripe from "stripe";
import querystring from "query-string";

const stripe = Stripe(process.env.STRIPE_SECRET)

export const createConnectAccount = async (req, res) => {
}