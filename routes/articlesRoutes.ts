import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getArticle,
  updateArticle,
  getArticles,
  saveArticles,
} from "../controllers/articlesController";

const routes = Router();

routes.get("/save", saveArticles);
routes.get("/", getArticles);
routes.post("/", createArticle);
routes.get("/:id", getArticle);
routes.put("/:id", updateArticle);
routes.delete("/:id", deleteArticle);

export default routes;
