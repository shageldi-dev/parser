import express from "express";
import commentsRouter from "./comments.router";

const router = express.Router();
router.use("/comments", commentsRouter);

export default router;
