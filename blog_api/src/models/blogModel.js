"use strict";

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogCategoryScema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "blogCategory", timestamps: true }
);

const blogPostSchema = new Schema(
  {
    // _id
    // categoryId
    // One To Many Relation
    blogCategoryId: {
      type: Schema.Types.ObjectId, // ForeignKey, RelationID
      ref: "BlogCategory", // ref'teki model adi mongoose.model('modelName',fromWhichSchema)'deki modelName ile ayni olmak zorundadir.
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    // createdAt
    // updatedAt
  },
  {
    collection: "blogPost",
    timestamps: true,
  }
);

// https://mongoosejs.com/docs/models.html
// Modeller, Schema tanımlarından derlenen constructor'lardir.  Bir modelin instance'ina document denir.  Modeller, MongoDB veritabanındaki document'leri oluşturmaktan ve okumaktan sorumludur.
// mongoose.model('modelName',fromWhichSchema)
const BlogCategoryModel = model("BlogCategory", blogCategoryScema);
const BlogPostModel = model("BlogPost", blogPostSchema);

module.exports = { BlogPost: BlogPostModel, BlogCategory: BlogCategoryModel };
