import Articles, { ArticleI } from "../models/Articles";
import * as express from "express";
import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

export const saveArticles = async (
  req: express.Request,
  res: express.Response
) => {
  const results = await axios.get("/articles");

  Articles.insertMany(results.data)
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((error) => console.log(error.message));
};

export const getArticles = async (
  req: express.Request,
  res: express.Response
) => {
  Articles.find().then((data) => {
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Articles not found" });
    }
    return res.status(200).json(data);
  });
};

export const createArticle = async (
  req: express.Request,
  res: express.Response
) => {
  const articleData: ArticleI = req.body;
  const newArticle = new Articles(articleData);
  newArticle.save().then((savedArticle) => {
    return res.status(201).json(savedArticle);
  });
};

export const deleteArticle = (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  Articles.findByIdAndDelete({ id }).then((success) => {
    if (!success) {
      return res
        .status(404)
        .json({ status: "error", message: "Unable to delete Article" });
    }
    return res.send("Article deleted!");
  });
};

export const updateArticle = (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  Articles.findByIdAndUpdate(
    { id: id },
    { new: true, useFindAndModify: false }
  ).then((savedArticle) => {
    return res.status(200).json(savedArticle);
  });
};

export const getArticle = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  Articles.find({ id }).then((data) => {
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Articles not found" });
    }
    return res.status(200).json(data);
  });
};
