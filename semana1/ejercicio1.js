/*const num1=6,
num2=10;
let suma= num1+num2;
console.log(`La suma de ${num1} y ${num2} es ${suma}`);*/

/*funcion suma*/
/*arrow function*/
const sumar=(num1,num2)=>{
    let suma= num1+num2;
console.log(`La suma de ${num1} y ${num2} es ${suma}`);
}
/*ejecutar funcion
sumar(6,10);*/

/*crear objeto*/
//exports.suma=sumar;

/*funcion resta*/
function restar(num1,num2){
    let resta=num1-num2;    
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);
}
//exports.resta=restar;

/*funcion multiplicacion*/
function multiplicar(num1,num2){
    let multi=num1*num2;    
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multi}`);
}
//exports.multi=multiplicar;

/*funcion division*/
function dividir(num1,num2){
    let division=num1/num2;    
    console.log(`La division entre ${num1} y ${num2} es ${division}`);
}
//exports.division=dividir;

/*funcion potencia*/
function potenciar(num1,num2){
    let potencia=num1**num2;    
    console.log(`La potenciacion de ${num1} y ${num2} es ${potencia}`);
}
//exports.potencia=potenciar;

/*funcion radicación*/
function radicacion(num1){
    let raiz=Math.sqrt(num1);
    console.log(`La raiz de ${num1} es ${raiz}`);
}
//exports.raiz=radicacion;
/*crear modulo*/
const operaciones={}
operaciones.suma=sumar;
operaciones.resta=restar;
operaciones.multi=multiplicar;
operaciones.division=dividir;
operaciones.potencia=potenciar;
operaciones.raiz=radicacion;

/*exportar objeto completo(modulo)*/
module.exports=operaciones