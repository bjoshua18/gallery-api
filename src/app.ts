import express from 'express'
import morgan from 'morgan'

const app = express()

import indexRoutes from './routes/index'

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev')) // Muestra mensajes por consola de las peticiones del cliente. 'dev' significa que solo funciona en desarrollo

// Routes
app.use('/api', indexRoutes) // Toda la ruta /api, lo maneja indexRoutes

export default app