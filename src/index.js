import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import songRoutes from "./routes/song.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";

// Load environment variables
dotenv.config();
const app = express();

// Cors
app.use(
  cors({
    origin: ["http://localhost:5173", "https://ace-potify.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playlistRoutes);

// Home route
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
