import {Request, Response} from 'express'
import Photo from '../models/Photo'

export async function getPhotos(req: Request, res: Response): Promise<Response> {
	const photos = await Photo.find()
	return res.json(photos)
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id
	const photo = await Photo.findById(id)
	return res.json(photo)
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {

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