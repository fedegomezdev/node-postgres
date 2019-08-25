import Task from '../models/Task';


export async function createTask(req, res) {
    const {name, done ,projectid} = req.body ;
    const newTask = await Task.create({
        name,
        done,
        projectid      //no hace falta poner name: name , donde: done etc porque tienen el mismo nombre
    }, {
        fields : ['name', 'done', 'projectid']
    }); 
    res.json({message: 'task created', data: newTask });
}

export async function getTasks(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'], //queremos estas cosas
        order: [            //ordenadas asi
            ['id', 'DESC']  //por id y de forma descendiente
        ]
    });
    res.json({tasks});
}

export async function getOneTask(req, res) {
    const {id} = req.params;
    const task = await Task.findOne({
        where: {
            id:id
        },
        attributes : ['id', 'name' , 'projectid']
    });
    res.json(task);

}

export async function updateTask(req, res) {
    const {id} = req.params;
    const {name, done, projectid} = req.body;

    const task = await Task.findOne({
        attributes : ['name', 'done', 'projectid', 'id'],
        where : { id : id} 
    });
    const updateTask =await Task.update({
        name,
        done,
        projectid
    }, {
        where : {id : id}
    });
    res.json({message:'task update', update: updateTask});
}

export async function deleteTask(req, res) {
    const { id } = req.params;
    await Task.destroy({
        where: {
            id: id
        }
    });
    res.json({message:'tarea eliminada'});
}

export async function getTaskByProject(req, res) {
    const {projectid} = req.params;
    const tasks = await Task.findAll({
        where : {
            projectid : projectid
        },
        attributes : ['id', 'name']
    });
    res.json(tasks);
}