import express from 'express'
import {
  getAllSongs,
  createSong,
  deleteSong,
  getSongsByPlaylist
} from '../controllers/song.controller.js'

const router = express.Router()

router.get('/', getAllSongs)
router.get('/playlist/:playlistId', getSongsByPlaylist)
router.post('/', createSong)
router.delete('/:id', deleteSong)

export default router
