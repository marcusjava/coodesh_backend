import { Document, Model, model, Types, Schema, Query } from "mongoose";

/* 
{
    718968
    "id": 0,
    "featured": false,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
      {
        "id": "string",
        "provider": "string"
      }
    ],
    "events": [
      {
        "id": "string",
        "provider": "string"
      }
    ]
  }



*/

export interface ArticleI {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  launches: {
    id: string;
    provider: string;
  }[];
  events: { id: string; provider: string }[];
}

const ArticleSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ArticleI & Document>("Article", ArticleSchema);
