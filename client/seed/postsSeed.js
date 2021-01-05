const db = require('../db/connection') // importing connection
const Post = require('../models/postModels') // importing post schema

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// Set up seed post data


// function to run seed post data
const run = async () => {
  await main();
  db.close();
}

// invoking function
run()