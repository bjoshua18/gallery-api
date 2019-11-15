import { connect } from 'mongoose'

export async function startConnection() {
	await connect('mongodb://localhost/gallery-db', {
		useNewUrlParser: true
	})
	.then(() => console.log('Database is connected'))
	.catch(() => console.log('Error al conectarse'))	
}