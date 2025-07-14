import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await prisma.playlist.findMany();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
};

export const getPlaylistById = async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await prisma.playlist.findUnique({
      where: { id: Number(id) },
    });
    if (!playlist) return res.status(404).json({ error: "Not found" });
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
};

export const getSongsByPlaylistId = async (req, res) => {
  const { id } = req.params;
  try {
    const songs = await prisma.song.findMany({
      where: { playlistId: Number(id) },
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch songs" });
  }
};
