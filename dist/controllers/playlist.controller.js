import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await prisma.playlist.findMany();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch playlists"
    });
  }
};
export const getPlaylistById = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const playlist = await prisma.playlist.findUnique({
      where: {
        id: Number(id)
      }
    });
    if (!playlist) return res.status(404).json({
      error: "Not found"
    });
    res.json(playlist);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch playlist"
    });
  }
};
export const getSongsByPlaylistId = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const songs = await prisma.song.findMany({
      where: {
        playlistId: Number(id)
      }
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch songs"
    });
  }
};
export const createPlaylist = async (req, res) => {
  const {
    name
  } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "Playlist name is required"
    });
  }
  try {
    const playlist = await prisma.playlist.create({
      data: {
        name
      }
    });
    res.status(201).json(playlist);
  } catch (error) {
    console.error("Create playlist error:", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};
export const deletePlaylist = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    await prisma.playlist.delete({
      where: {
        id: Number(id)
      }
    });
    res.json({
      message: "Playlist deleted"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error deleting playlist"
    });
  }
};