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
      origin: "https://www.brownedgetechnology.com",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  server.use(bodyParser.json());

  // Remove these lines, as Next.js will handle the routing
  server.get("/api/hello", (req, res) => {
    res.send("welcome to brown edge technology");
  });

  // Remove these lines, as Next.js will handle the routing
  server.use("/api", blogRouter);
  server.use("/api/auth", authRouter);
  server.use("/api/contact", contactRouter);

  // Use Next.js to handle requests
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});