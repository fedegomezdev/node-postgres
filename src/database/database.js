import Sequelize from 'sequelize';  //Sequelize esta en mayuscula porq vamos a importar una clase

export const sequelize = new Sequelize(  //instanciamos la clase que recibe unos parametros , la guardamos en una constante y la exportamos
    'postgres', //nombre de la base de datos, con pg viene con defecto la primera como 'postgres'
    'postgres', //nombre de usuario y q viene como defecto tmb
    'claudio123',//contra de la db
    {
        host:'localhost',
        dialect:'postgres', //a sequelize hay que decirle que db vamos a usar asi
        pool: { //multipleconexiones y cosas asi
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
        //logging : false  //para que por consola no me muestre mensajes, pero yo lo dejo desactivado para q me muestre
    }

)   