import Project from "../models/Project"; //importo el modelo de projecto para guardar los datos del req.body ahi

// * usamos async y await para manejarlo de forma sincrona a la funcion, porque project.create va a tardar


//este se encarga de consultar o traer los datos
export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll(); //findall es un metodo que me devuelve todos los datos y devuelve un array
    res.json({
      data: projects
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error al traer los datos"
    });
  }
}

//aca es donde se encargaran de crear los datos
export async function createProject(req, res) {
  //y lo exporto para usarlo en las routes, se puede hacer alla pero asi queda mas prolijo
  console.log(req.body); //los datos que van a llegar cuand oalguien visite esa ruta

  const { name, priority, description, deliverydate } = req.body; //extraer los datos y guardarlos desde lo q nos mandan

  try {
    //trate de crear un nuevo proyecto, sino que vaya al catch y muestre el error

    let newProject = await Project.create(
      {
        //create es un metodo de  sequelize, y guardamos el projecto nuevo en newProject
        name: name,
        priority: priority,
        description: description,
        deliverydate: deliverydate
      },
      {
        fields: ["name", "priority", "description", "deliverydate"] //le especificamos los datos q le vamos a pasar, porque por ejemplo id no lo pasamos porque se hace solo,y como esta en not null nos va a tirar error
      }
    );

    if (newProject) {
      //si creo el projecto bien, le pasamos ese mensaje y le mostramos el projecto
      res.json({
        message: "Project created successfully",
        data: newProject
      });
    }
  } catch (error) {
    consolele.log(error);
    res.status(500).json({
      message: "error en la creacion"
    });
  }
}

//consultamos y devolvemos si nos pasan una id por parametro y es igual al de algun proejcto creado
export async function getOneProject(req,res){
    const {id} = req.params //en vez de usar body, usamos params porque seria los parametros de la pagi ej /api/pojects/2
    const onePoject = await Project.findOne({ //metodo de sequelize que solo busca uno
        where: {
            id : id //si el id de nuestra base es igual al id de req.params que nos pasan
        }
    }); 
    
    res.json(onePoject); //y le enviamos al cliente el project
}       

//eliminamos un projecto dependiendo del id
export async function deleteOneProject(req,res){
    const {id} = req.params;
    const projectDeleteRow = await Project.destroy({ //destroy es el metodo para eliminar 
        where : {                                    //lo guardo en esa constante pero lo q me devuelve es la cantidad de filas que se elminaron   
            id : id
        }
    });
    res.json({
        message: 'projecto eliminado',
        eliminados : projectDeleteRow //cuantos datos fueron eliminados 
    });
}


export async function updateProyect(req, res) {
    const { id } = req.params;
    const {name, priority, description , deliverydate} = req.body; //necesitamos el id de req.params y los datos que vamos a acutalizar de req.body

    try{
        const projects = await Project.findAll({ //una vez que lo encuentre nos va a devolver una array de proyectos
            attributes : ['id', 'name','priority' ,'description', 'deliverydate'], //quiero solamente estos atributos
            where : {id : id} //para que busque algo que el id sea el mismo que el id q me pasan
        }); //y estos son los datos que nos va a devolver
    
        //antes de devolver los datos, hay que rercorrerlos
        if(projects.length > 0 ){ //es decir, si encuentra por lo menos un proyecto
            projects.forEach(async project => {   //vamos a recorrer 
                await project.update({  //le pasamos los datos que queremos actualizar a ese project con update de sequelize
                    name,
                    priority,
                    description,
                    deliverydate
                });
            })
        }
        return res.json({
            message: 'project update',
            data: projects
        });
    } catch(error){ console.log(error);}
}