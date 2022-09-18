//tipos de variables
console.log("hola");
var variable_glo="hola mundo";
let variable_local="Hola mundito";
const Variable_Const="hola mundito fijo";
console.log("variable global:",variable_glo);
console.log("variable local:",variable_local);
console.log("variable constante:",Variable_Const);
function scope(variable_local) {
    return 2+3+" "+variable_local;
}
console.log(scope("papitas"));
var variable_num=1;
var var_string ="Hola soy una cadena de String";
var var_bool=true;
var var_Arreglo=[1,2,"papitas",4,5,6,7];
var var_obj={"valor 1:":1, "valor 2:":2};
console.log(var_Arreglo);
console.log(var_obj);

var var_cambiable ="1";
console.log("variable "+var_cambiable+" es del tipo "+typeof(var_cambiable));
var var_cambiada=parseInt(var_cambiable);
console.log("ahora es "+var_cambiada +" del tipo "+typeof(var_cambiada));

var funcio_expre=function (a,b) {return a*b};
console.log("funtion express :",funcio_expre(5,3));

var funcio_flec=(o,p)=>o+p;
console.log("Funcion flecha: ",funcio_flec(7,10));