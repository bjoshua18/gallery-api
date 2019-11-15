import {Router} from 'express'
const router = Router()

import { createPhoto, getPhotos } from '../controllers/photo.controller'
import multer from '../libs/multer'

router.route('/photos')
	.post(multer.single('image'), createPhoto) // Comprobamos que recibimos una imagen con multer y luego lo procesamos con createPhoto
	.get(getPhotos)

export default router