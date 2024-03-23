"use strict";

// yarn add express-async-errors
require("express-async-errors");

const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports.BlogCategory = {
  // ? get all
  list: async (req, res) => {
    //* - FILTERING & SEARCHING & SORTING & PAGINATION *//
    // ! middleware ile response'a eklenen getModelList async function'ina model girilerek filter, search, sort, pagination yaptirilabilir dilenen controller method'unda.
    const data = await res.getModelList(BlogCategory);

    // ! pagination detail'leri icin middleware'e eklenmis ekstra async function ile pagination detail'leri response ile donulebilir, bu frontend pagination oldukca elverislidir, ekstra hic bir package/logic kullanmaya gerek kalmaz.
    res.status(200).json({
      error: false,
      details: await res.getModelListDetails(BlogCategory),
      result: data,
    });
  },
  // ? get single
  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).json({
      error: false,
      result: data,
    });
  },
  // ? create
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    res.status(201).json({
      error: false,
      result: data,
    });
  },
  // ? update
  update: async (req, res) => {
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    // 202 -> accecpted
    res.status(202).json({
      error: false,
      message: "Updated",
      body: req.body, // gonderilen veriyi goster
      result: data,
      new: await BlogCategory.findOne({ _id: req.params.categoryId }), // guncellenmis veriyi goster
    });
  },
  // ? delete
  destroy: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    if (data.deletedCount !== 0) {
      res.status(200).json({
        error: false,
        result: data,
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Document Not Found");
    }
  },
};

module.exports.BlogPost = {
  // ? get all
  list: async (req, res) => {
    const data = await res.getModelList(BlogPost, "blogCategoryId");

    res.status(200).json({
      error: false,
      details: await res.getModelListDetails(BlogPost),
      result: data,
    });
  },
  // ? get single
  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate(
      "blogCategoryId"
    );

    res.status(200).json({
      error: false,
      result: data,
    });
  },
  // ? create
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).json({
      error: false,
      result: data,
    });
  },
  // ? update
  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);

    // 202 -> accecpted
    res.status(202).json({
      error: false,
      message: "Updated",
      body: req.body, // gonderilen veriyi goster
      result: data,
      new: await BlogPost.findOne({ _id: req.params.postId }), // guncellenmis veriyi goster
    });
  },
  // ? delete
  destroy: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });

    // res.sendStatus(data.deletedCount ? 204 : 404);
    // 204 ile response body yollamaz, o yüzden status 200 yollayip neyin silindigi de kullaniciya gösterilebilir.
    if (data.deletedCount !== 0) {
      // res.sendStatus(204);
      res.status(200).json({
        error: false,
        result: data,
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Document Not Found");
    }
  },
};

// Status Code'lar
// 1xx -> Informational responses
// 2xx -> Successful responses
// 3xx -> Redirection responses
// 4xx -> Client error responses
// 5xx -> Server error responses
