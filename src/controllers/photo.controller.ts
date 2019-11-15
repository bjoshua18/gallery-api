import {Request, Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Photo from '../models/Photo'

export async function getPhotos(req: Request, res: Response): Promise<Response> {
	const photos = await Photo.find()
	return res.json(photos)
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id // Obtenemos el id desde el req
	const photo = await Photo.findById(id) // Obtenemos los datos con el id
	return res.json(photo) // Lo convertimos a json y lo devolvemos
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {

	const { title, description } = req.body // Obtenemos el title y description desde el req.body
	const newPhoto = { // Creamos un objeto con los datos obtenidos
		title: title,
		description: description,
		imagePath: req.file.path // Obtenemos la ruta de la img a traves del req.file
	}
	const photo = new Photo(newPhoto) // Creamos el modelo con el objeto
	await photo.save() // Guardamos los datos
	return res.json({ // Devolvemos los datos guardados en formato json
		message: 'Photo saved successfully',
		photo
	})
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
	const id = req.params.id
	const photo = await Photo.findByIdAndRemove(id)
	if(photo) // Si la foto existe
		await fs.unlink(path.resolve(photo.imagePath)) // Eliminala pasando la ruta absoluta

	return res.json({
		message: 'Photo deleted',
		photo
	})
}