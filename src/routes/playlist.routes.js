import express from "express";
import {
  getAllPlaylists,
  getPlaylistById,
  getSongsByPlaylistId,
} from "../controllers/playlist.controller.js";

const router = express.Router();

router.get("/", getAllPlaylists);
router.get("/:id", getPlaylistById);
router.get("/:id/songs", getSongsByPlaylistId);

export default router;
