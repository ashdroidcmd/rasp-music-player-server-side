import express from "express";
import {
  getAllPlaylists,
  getPlaylistById,
  getSongsByPlaylistId,
  createPlaylist,
  deletePlaylist,
} from "../controllers/playlist.controller.js";

const router = express.Router();

router.get("/", getAllPlaylists);
router.get("/:id", getPlaylistById);
router.get("/:id/songs", getSongsByPlaylistId);
router.post("/", createPlaylist);
router.delete("/:id", deletePlaylist);

export default router;
