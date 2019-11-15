import {Router} from 'express'
const router = Router()

import { createPhoto, getPhotos, getPhoto, deletePhoto } from '../controllers/photo.controller'
import multer from '../libs/multer'

router.route('/photos')
	.get(getPhotos) // Obtenemos todas las imagenes
	.post(multer.single('image'), createPhoto) // Comprobamos que recibimos una imagen con multer y luego lo procesamos con createPhoto

	router.route('/photos/:id')
		.get(getPhoto)
		.delete(deletePhoto)

export default router