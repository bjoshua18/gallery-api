import { Schema, model, Document } from 'mongoose'

// Creamos el schema para la db
const schema = new Schema({
	title: String,
	description: String,
	imagePath: String
})
// Creamos la interface para el modelo en nuestra app
interface IPhoto extends Document {
	title: string
	description: string
	imagePath: string
}

// Creamos el model cuya estructura debe ser igual a IPhoto
export default model<IPhoto>('Photo', schema)