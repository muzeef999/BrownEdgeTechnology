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

const port = process.env.PORT || 3000;

connectDB();

app.prepare().then(() => {
  const server = express();
   server.use(bodyParser.json());
  server.use(cors());
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  



  // Remove these lines, as Next.js will handle the routing
  server.use("/api", blogRouter);
  server.use("/api/auth", authRouter);
  server.use("/api/contact", contactRouter);

  // Use Next.js to handle requests
  server.get("*", (req, res, next) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
  });



  server.listen(port, () => {
    console.log(`Server Listening to port ${port}`);
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});