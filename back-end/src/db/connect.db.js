import mongoose from "mongoose";

export const connect = async () => {
  try {
    const connectDB = await mongoose.connect(
      `mongodb+srv://${process.env.CLUSTER_USRNAME}:${process.env.CLUSTER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log(
      `Database synced and connected successfully!\nHost : ${connectDB.connection.host}`
    );
  } catch (error) {
    console.error(
      `An error occurred in linking to the database. Debug needed.\n${error.message}`
    );
    process.exit(1);
  }
};
