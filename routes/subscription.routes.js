import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get subscription details by id" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update a subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete a subscription" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "get all user subscriptions" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel user subscriptions" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "cancel user subscriptions" })
);

export default subscriptionRouter;
