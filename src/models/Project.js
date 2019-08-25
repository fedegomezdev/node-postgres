import Sequelize from 'sequelize'; //aca es para modelar datos, no como en database para configurar
import {sequelize} from '../database/database'; //importamos la conexion

import Task from './Task'; //importamos el modelo de task porq lo necesitamos conectar a projects con hasmany

const Project = sequelize.define('projects', { //definimos el modelo/esquema con el nombre projects y luego las propiedades del projecto
    id: {
        type: Sequelize.INTEGER, //desde sequelize traemos su datatype llamada integer 
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps : false  //para que no tenga problemas con el date
});


Project.hasMany(Task, {foreingKey: 'projectid', sourceKey:'id' });  //le decimos a cual se puede interconectar y cual seria la clave foranea y con cual se conecta
Task.belongsTo(Project,{foreingKey: 'projectid', sourceKey:'id' }); //es como decirle que muchas tareas tienen UN solo proyecto


export default Project;