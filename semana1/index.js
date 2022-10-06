/*traer el export de otro archivo*/
/* guardar el require dentro de un objeto (op)*/
/*const op=require('./ejercicio1')
op.suma(5,10);
op.resta(6,10)
op.multi(2,3)
op.division(20,2)
op.potencia(10,2)
op.raiz(25)
console.log(op)
const ope=process.openStdin();
ope.addListener("data", (dato)=>{
    console.log(`La opcion escogida es ${dato.toString()}`)

    const num1=process.openStdin();
    const num2=process.openStdin();
    console.log(`num1 ${num1} y ${num2}`);
    
})*/

//1.requerir modulo http
const http=require('http') 
const { resta } = require('./ejercicio1')
//funcion callback para manejar el servidor
function handleServer(req,res){ 
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>Esta es la respuesta del servidor OK</h1>')
    res.end()
}
//.crear el server
const server=http.createServer(handleServer).listen(5000)
