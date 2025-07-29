import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));

userRouter.get("/:id", (req, res) => res.send({ title: "GET single user" }));

userRouter.post("/", (req, res) => res.send({ title: "CREATE user" }));

userRouter.put("/:id", (req, res) =>
  res.send({ title: "Update a user by id" })
);

userRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete a user by id" })
);

export default userRouter;
