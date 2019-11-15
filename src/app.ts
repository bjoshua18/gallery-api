import express from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express()

import indexRoutes from './routes/index'

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev')) // Muestra mensajes por consola de las peticiones del cliente. 'dev' significa que solo funciona en desarrollo
app.use(express.json()) // Usamos el json() para manejar el envio y recepcion de archivos json

// Routes
app.use('/api', indexRoutes) // Toda la ruta '/api', lo maneja indexRoutes
// Accedemos a los archivos de 'uploads' desde '/uploads' con el navegador
app.use('/uploads', express.static(path.resolve('uploads'))) // path.resolve() devuelve la ruta absoluta

export default app