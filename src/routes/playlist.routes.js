import express from 'express'
import {
  getAllPlaylists,
  createPlaylist,
  deletePlaylist
} from '../controllers/playlist.controller.js'

const router = express.Router()

router.get('/', getAllPlaylists)
router.post('/', createPlaylist)
router.delete('/:id', deletePlaylist)

export default router
