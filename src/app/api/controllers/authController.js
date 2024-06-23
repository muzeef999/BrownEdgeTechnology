import expressAsyncHandler from "express-async-handler";

export const signUp = expressAsyncHandler(async (req, res) => {
  try {
  } catch (error) {
    let { name, email, passwoord, dateOfBirth } = req.body;

    res.status(500).send("Error:" + err.message);
  }
});
