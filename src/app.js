//crea el codigo del servidor
import express, {json} from 'express'; //el framework de nodejs para hacer servidores web y su middlewar llamado json
import morgan from 'morgan';

//Importing routes
import projectRoutes from './routes/projects';
import tasksRoutes from './routes/tasks';

//inicializaciones 
const app = express(); //inicializar el servidor, asi podemos empezar a usarlo bajo el nombre app.

//MIDDLEWARES
app.use(morgan('dev')); //para ver por consola las peticiones que van llegando
app.use(json()); //se usa para cuando nos envien cosas en formato json el servidor los pueda entender

//routes
app.use('/api/projects' , projectRoutes); //si visitan esa ruta, puede empezar a usar el enrutador
app.use('/api/tasks', tasksRoutes);//cuando visitan esto va a funcionar con lo de tasksroutes


export default app; // lo importo para usarlo en otros lados, ejemplo en index.js
