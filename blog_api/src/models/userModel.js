"use strict";

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const passwordEncyrpt = require("../helpers/passwordEncrypt");

// Session ve Cookie frontend'in isidir ancak backend'te de implement edilebilir. Backend token odakli calisir.

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Email field is required"], // custom error message
      unique: true,
      validate: [
        (email) => {
          if (email.includes("@") && email.includes(".")) {
            return true;
          }
          return false;
        },
        "Email must be valid.",
      ],
      // validate: [
      //   (email) => email.includes("@") && email.includes("."),
      //   "Email type is incorrect",
      // ],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      // encyrption via setter
      // setter'in return'u database'e deger olarak yazilir
      // set: passwordEncyrpt,
      set: (password) => passwordEncyrpt(password),
    },

    firstName: String,

    lastName: String,
  },
  { collection: "user", timestamps: true }
);

const UserModel = model("User", UserSchema);

module.exports = { User: UserModel };
