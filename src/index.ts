import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/api/whoami", (req: Request, res: Response) => {
  try {
    const software = req.headers["user-agent"];
    const language = req.headers["accept-language"];
    const ipaddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;

    res.json({ software, language, ipaddress });
  } catch (error) {
    res.status(500);
    res.json({
      message: "Something went wrong.",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
