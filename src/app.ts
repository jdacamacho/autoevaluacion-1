import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import path from 'path'; 
import { authRouter } from './routes/auth/authRoute';
import { Labor } from './observer/Labor';
import { Publisher } from './observer/Publisher';

export const app = express();

// Default configs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));

// Acceso a vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Definicion de rutas
app.use('/', authRouter);

// redirigir al inicio a login
app.get('*', (__, res) => res.redirect('/login') );

// Acceso a recursos
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + "/public"));


const l = new Labor();
const p = new Publisher();

p.eventManager.suscribe(l);
p.fecha();
