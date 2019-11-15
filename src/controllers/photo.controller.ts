import {Request, Response} from 'express'
import Photo from '../models/Photo'

export function getPhotos(req: Request, res: Response): Response {

	console.log('get all photos')

	return res.json({
		message: 'Get all photos'
	})
}

export async function createPhoto(req: Request, res: Response) {

	const { title, description } = req.body
	const newPhoto = {
		title: title,
		description: description,
		imagePath: req.file.path // Obtenemos la ruta de la img a traves del req.file
	}
	const photo = new Photo(newPhoto)
	console.log(photo)
	await photo.save()

	return res.json({
		message: 'Photo saved successfully',
		photo
	})
}