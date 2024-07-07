import express from "express";
import next from "next";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import blog from "./routers/blogs.js";
import contact from "./routers/contact.js";
import auth from "./routers/auth.js";
import cors from "cors";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

const corsOptions = {
  origin: "https://www.brownedgetechnology.com",
  optionsSuccessStatus: 200,
};

app.prepare().then(() => {
  const server = express();

  // Apply CORS middleware to the Express server
  server.use(cors(corsOptions));

  server.use(bodyParser.json());

  server.get("/api/hello", (req, res) => {
    res.send("welcome to brown edge technology");
  });

  server.use("/api", blog);
  server.use("/api", auth);
  server.use("/api", contact);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
