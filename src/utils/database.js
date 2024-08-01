const mongoose = require("mongoose")
const configObj = require("../config/env.config.js")
const { USER_MONGO, PASSWORD_MONGO, DB_MONGO } = configObj

mongoose.connect(`mongodb+srv://${USER_MONGO}:${PASSWORD_MONGO}@cluster0.fbnrglq.mongodb.net/${DB_MONGO}`)
  .then(() => console.log("Connected database"))
  .catch((error) => console.error("Error Establishing a Database Connection", error))