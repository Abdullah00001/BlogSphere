import app from "./app.js";
import { connect } from "./db/connect.db.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;

(async () => {
  try {
    await connect();
    console.log(`Server Is Starting...`);
    app.listen(port, () => {
      console.log(
        `The server has been booted up successfully!\nServer running on port : ${port}`
      );
    });
  } catch (error) {
    console.error(
      `Unable to boot the server. Troubleshooting recommended.\n${error.message}`
    );
    process.exit(1);
  }
})();
