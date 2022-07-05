import dotenv from "dotenv"
dotenv.config()

const dbUrl = {
    url: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.93ka9d2.mongodb.net/?retryWrites=true&w=majority`
  };

  export default dbUrl