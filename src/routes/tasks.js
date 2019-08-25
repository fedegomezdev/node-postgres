import {Router} from 'express';
const router = Router(); // me devuelve un objeto

import {createTask, getTasks, getOneTask, updateTask, deleteTask, getTaskByProject} from '../controllers/task.controller';


// /api/tasks/
router.post('/' , createTask);
router.get('/', getTasks);

//api/tasks/:id
router.delete('/:id', deleteTask);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);

//api/tasks/project/:projectid
router.get('/project/:projectid', getTaskByProject);

export default router;