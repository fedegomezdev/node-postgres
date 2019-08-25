//arranca la aplicacion
import app from './app';
import '@babel/polyfill';

async function main(){ //funcion que arranca toda la app
    
    await app.listen(3000); //este metodo es asyncrono, poniendole await le damos tiempo a q se ejecute y despues continue de linea
    console.log('server on port 3000');

}

main();

//cuando ya tengo todo programado, puedo darle npm run build, para que convierta todo en dist con babel para que todas las
//navegadores entiendan y no usar js moderno.        y despues puedo darle npm start y estariamos ya ejecutando el codigo desde dist