import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from Vite build
const publicPath = path.join(import.meta.dirname, "..", "dist", "public");
app.use(express.static(publicPath));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
