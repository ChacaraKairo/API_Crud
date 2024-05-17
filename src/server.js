import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api", routes);
//http://localhost:3000/api/produtos

app.listen(PORT, () => {
  console.log(
    `Server running on port http://localhost:${PORT}`,
  );
});

//aula do Felipe https://www.youtube.com/watch?v=6OzX6qu35Bc
