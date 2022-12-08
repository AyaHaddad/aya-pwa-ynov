import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))