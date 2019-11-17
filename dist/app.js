"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan_1.default('dev')); // Muestra mensajes por consola de las peticiones del cliente. 'dev' significa que solo funciona en desarrollo
app.use(cors_1.default()); // Para permitir la conexion con otros servidores
app.use(express_1.default.json()); // Usamos el json() para manejar el envio y recepcion de archivos json
// Routes
app.use('/api', index_1.default); // Toda la ruta '/api', lo maneja indexRoutes
// Accedemos a los archivos de 'uploads' desde '/uploads' con el navegador
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads'))); // path.resolve() devuelve la ruta absoluta
exports.default = app;
