import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllPlaylists = async (req, res) => {
  const playlists = await prisma.playlist.findMany({
    include: { songs: true }
  })
  res.json(playlists)
}

export const createPlaylist = async (req, res) => {
  const { name } = req.body
  const playlist = await prisma.playlist.create({
    data: { name }
  })
  res.status(201).json(playlist)
}

export const deletePlaylist = async (req, res) => {
  const { id } = req.params
  await prisma.playlist.delete({ where: { id: Number(id) } })
  res.json({ message: 'Playlist deleted' })
}
