const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const costSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      get: n => Math.round(n),
      set: n => Math.round(n)
    },
    currency: String,
    created: {
      type: Date,
      default: Date.now
    },
    modified: {
      type: Date,
      default: Date.now
    },
    categories: {
      type: String,
      lowercase: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { collection: "costs" }
);

module.exports = mongoose.model("Cost", costSchema);

// you can put collection name under the scheme
// or as the third arg in model declaration
