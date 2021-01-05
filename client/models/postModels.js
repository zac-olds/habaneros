const mongoose = require('mongoose'); // importing mongoose to use mongoose
const Schema = mongoose.Schema; // importing Schema from mongoose to set up Schema model

// Setup new schema for each post
const Post = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true}
  },
  { timestamps: true }
)

// export for use in postsSeed
module.exports = mongoose.model('posts', Post)