import expressAsyncHandler from "express-async-handler";

export const blog = expressAsyncHandler(async (req, res) => {
  res.json({
    status: "FAILED",
    message: "this code is write filed",
  });
});
