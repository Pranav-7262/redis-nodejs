import axios from "axios";
import client from "./client.js";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos");

  if (cacheValue) {
    return res.json(JSON.parse(cacheValue));
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);

  return res.json(data);
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000/");
});
