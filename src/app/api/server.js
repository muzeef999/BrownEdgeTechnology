import express from "express";
import next from "next";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import blogRouter from "./routers/blogs.js";
import contactRouter from "./routers/contact.js";
import authRouter from "./routers/auth.js";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const server = express();

  // Use CORS middleware with options
  server.use(
    cors({
      origin: "https://www.brownedgetechnology.com/", // Replace with your frontend domain
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      optionsSuccessStatus: 204,
    })
  );

  server.use(bodyParser.json());

  server.get("/api/hello", (req, res) => {
    res.send("welcome to brown edge technology");
  });

  server.use("/api", blogRouter);
  server.use("/api/auth", authRouter);
  server.use("/api/contact", contactRouter);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
