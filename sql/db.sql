CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL 
); 

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
); 


INSERT INTO projects (name, priority , description, deliverydate)
    VALUES('hacer una pagina', 1 , 'usando js', '2019-08-24');
    
INSERT INTO projects (name, priority , description, deliverydate)
    VALUES('hacer un backend', 1 , 'usando node', '2019-08-24');
    
INSERT INTO projects (name, priority , description, deliverydate)
    VALUES('hacer una db', 1 , 'usando pg', '2019-08-24');

--INSERT TASK DATA    
INSERT INTO tasks(name, done, projectId)
    VALUES('descargar Vuejs', false , 1);

INSERT INTO tasks(name, done, projectId)
    VALUES('descargar Reactjs', false , 1);

INSERT INTO tasks(name, done, projectId)
    VALUES('descargar postgres', false , 2);

INSERT INTO tasks(name, done, projectId)
    VALUES('descargar sequelize', false , 2);        
