"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports["default"] = (0, mongoose_1.model)("Article", ArticleSchema);
