import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllSongs = async (req, res) => {
  const songs = await prisma.song.findMany({
    include: {
      playlist: true
    }
  });
  res.json(songs);
};
export const getSongsByPlaylist = async (req, res) => {
  const {
    playlistId
  } = req.params;
  const songs = await prisma.song.findMany({
    where: {
      playlistId: Number(playlistId)
    }
  });
  res.json(songs);
};
export const createSong = async (req, res) => {
  const {
    title,
    url,
    playlistId
  } = req.body;
  const song = await prisma.song.create({
    data: {
      title,
      url,
      playlistId: Number(playlistId)
    }
  });
  res.status(201).json(song);
};
export const deleteSong = async (req, res) => {
  const {
    id
  } = req.params;
  await prisma.song.delete({
    where: {
      id: Number(id)
    }
  });
  res.json({
    message: "Deleted successfully"
  });
};