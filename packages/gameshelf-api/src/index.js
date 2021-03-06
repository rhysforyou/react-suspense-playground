const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const Promise = require("bluebird");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) =>
  res.contentType("json").send({
    games: "/games",
    game: "games/:id",
    currentUser: "/user"
  })
);

app.get("/games", (req, res) =>
  res
    .contentType("json")
    .send(fs.readFileSync(path.resolve(__dirname, "../assets/data/games.json")))
);

app.get("/games/:id", (req, res) =>
  res
    .contentType("json")
    .send(
      fs.readFileSync(
        path.resolve(
          __dirname,
          "../assets/data/games/",
          `${req.params.id}.json`
        )
      )
    )
);

app.get("/user", (req, res) =>
  res
    .contentType("json")
    .send(fs.readFileSync(path.resolve(__dirname, "../assets/data/user.json")))
);

app.get("/comments/:id", (req, res) =>
  res
    .contentType("json")
    .send(
      fs.readFileSync(
        path.resolve(
          __dirname,
          "../assets/data/comments/",
          `${req.params.id}.json`
        )
      )
    )
);

app.get("/images/:filename", async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.resolve(__dirname, "../assets/images", filename);
  const format = filename.split(".").slice(-1)[0];
  const size = req.query.size != null ? parseInt(req.query.size, 10) : null;

  if (!fs.existsSync(filePath)) {
    return res.status(404).send();
  } else if (isNaN(size)) {
    return res
      .status(400)
      .contentType("text")
      .send("`size` parameter must be a number");
  }

  if (size == null) {
    const data = await Promise.promisify(fs.readFile)(filePath);
    return res.contentType(format).send(data);
  }

  const data = await sharp(filePath)
    .resize(size)
    .toBuffer();

  return res.contentType(format).send(data);
});

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}!`)
);
