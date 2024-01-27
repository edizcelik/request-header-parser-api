import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", (req: Request, res: Response) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
