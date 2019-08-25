import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Task = sequelize.define('task', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
         type: Sequelize.INTEGER
    }
}, {
    timestamps : false //a este no lo muestro , como para probar nada mas, a comparacion de project.js
});

export default Task;