import {Router} from 'express';
const router = Router(); // me devuelve un objeto

import {createProject, getProjects, getOneProject, deleteOneProject, updateProyect} from '../controllers/project.controller'; //importo la funcion para menjar el metodo aca.

// /api/projects/ <--asi lo configuramos en app.js en la parte de routes      
router.get('/', getProjects);
router.post('/' , createProject);

//api/projects/:proyectID
router.get('/:id', getOneProject);
router.delete('/:id', deleteOneProject);
router.put('/:id', updateProyect);


export default router;