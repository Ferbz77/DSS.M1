
// 1. Convertir una cadena de texto a formato de título: Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.

function convertirATitulo(frase){

  var fraseComoTitulo = "";
  var convertirAMayuscula = true;

  for (var i = 0; i < frase.length; i++) {
  // Convertir el caracter actual a mayuscula
  if (convertirAMayuscula) {
      fraseComoTitulo += frase[i].toUpperCase();
      convertirAMayuscula = false;
    } //si el caracter es una mayuscula, se convierte en minuscula
  else {
      fraseComoTitulo += frase[i].toLowerCase();
    }
   // Si el caracter actual es una espacio, indica que el prox caracter debe ser convertido a mayúscula
    if (frase[i] == " ") {
        convertirAMayuscula = true;
      }
  }
  return fraseComoTitulo;
}

var frase = "mi amigo me invito a comer";

var fraseComoTitulo = convertirATitulo(frase);
console.log(fraseComoTitulo);


// 2. Concatenar elementos de un array con un separador personalizado

function concatenarConSeparador(array, separador){

 // Inicializar una cadena con el primer elemento del array
var resultado = array[0];

 // Empezar a recorrer el array a partir del segundo elemento
 for (var i = 1; i < array.length; i++) {
   // Concatenar el separador y el elemento actual al resultado
   resultado += separador + array[i];
 }
 return resultado;
}

var palabras = ["Hola", "Mundo", "JavaScript"];
var separador = "-";
var resultado = concatenarConSeparador(palabras, separador);
console.log(resultado); 


//3. Revertir las palabras de una frase: Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function revertirFrase(frase1){
  // en palabra almaceno cada palabra y en un array las junto a todas
  var palabra = "";
  const totalPalabras = [];
  
  for (var i = 0; i < frase1.length + 1; i++){
    var elemento = frase1[i];

   //si llega a un espacio o al final de la frase, termina la palabra
    if (elemento == " " || i == frase1.length) {
      totalPalabras.push(palabra);
      palabra = "";  //reinicio la palabra para la que sigue
    }
    else {
      palabra += elemento;  //si no, agrego el elemento a la palabra actual
    }
  }
  // ordenar la nueva frase con las palabras invertidas

  var fraseInvertida = "";
  // 
  for (var i = totalPalabras.length - 1; i >= 0; i--){
    fraseInvertida += totalPalabras[i];
    if (i !== 0)
    fraseInvertida += " ";
  }
return fraseInvertida;
}
var frase1 = "JavaScript es divertido";
console.log(revertirFrase(frase1));

//4. Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de veces que aparece esa palabra en la cadena.

function contadorDePalabras(cadena, palabras1){
  //convertimos toda la cadena en minuscula para evitar la sensibilidad en la busqueda      
  const cadenaMin = cadena.toLowerCase();
  // convertimos cada palabra en minuscula y las almaceno en un array
  const palabraMin = [];
  for(var k = 0; k < palabras1.length; k++){
    palabraMin.push(palabras1[k].toLowerCase())
  }
  //inicializo un contador  
  var contadorPalabras = {}; 
   // inicializo una k para recorrer la cadena    
  var k = 0; 
  // uso un ciclo para recorrer la cadena y encontrar las palabras   
   while (k < cadenaMin.length) {
    var palabraEncontrada = "";
    
    //mientras no se encuentre un espacio o se llegue al final de la cadena
    while (cadenaMin[k] != " " && k < cadenaMin.length){

      palabraEncontrada += cadenaMin [k];

      k++;
    }  
    // si la palabra es o esta en la lista de palabras que buscamos aumenta el contador
    if (palabraMin.includes(palabraEncontrada)) {
      contadorPalabras[palabraEncontrada] = (contadorPalabras[palabraEncontrada] || 0) + 1;
    }
    
    //pasamos al siguiente caracter
    k++;
  }
  
  return contadorPalabras;
}

const cadena = "El sol brilla y el cielo está despejado.";
const palabras1 = ["el"];
const contador = contadorDePalabras(cadena, palabras1);
console.log("Contador de palabras:", contador);

// 5. Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena termina con ese sufijo, false en caso contrario.

function terminaConSufijo(cadena3, sufijo) {
  //separo la ultima palabra de la cadena
  var ultPalabra = ""
  var m = cadena3.length - 1;

  while (m >= 0 && cadena3[m] !== " ") {
    ultPalabra = cadena3[m] + ultPalabra;
    m--
  }

    // Comprobar si la palabra termina con el sufijo dado
    if (ultPalabra.length < sufijo.length) {
      return false; // Si la palabra es más corta que el sufijo, entonces no termina con este
  }

  for (var m = 0; m < sufijo.length; m++) {
      const palabraInd = ultPalabra.length - sufijo.length + m;
      if (ultPalabra[palabraInd] !== sufijo[m]) {
          return false; // Si los caracteres no coinciden, la palabra no termina con el sufijo
      }
  }

  return true; // Si todos los caracteres coinciden, la palabra termina con el sufijo
}
const cadena3 = "JavaScript es un lenguaje de programación";
const sufijo = "ción";
const resultado3 = terminaConSufijo(cadena3, sufijo);
console.log(resultado3); 

//6. Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y final de la misma.

function eliminarEspacios(cadena1) {
  var inicio = 0;
  var final = cadena1.length - 1;
//eliminar los espacios en blanco al inicio
  while (cadena1[inicio] == " ") {
    inicio ++;
  }
//eliminar espacios en blanco al final
  while (cadena1[final] == " ") {
  final--;
  }
  //ahora formo la cadena sin espacios al inicio y al final
  var cadenaSinEspacios = ""; 
  for (var i = inicio; i <= final; i++) { 
  cadenaSinEspacios += cadena1[i];
  } 
  return cadenaSinEspacios;
}

const cadena1 = " JavaScript es divertido ";
const resultado1 = eliminarEspacios(cadena1);
console.log(resultado1);


//7. Extraer el dominio de una dirección de correo electrónico: Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el dominio de la misma

function dominioDelCorreo(correo) {
  var dominio = "";
  var indArroba = false;

  // Recorro la dirección de correo electrónico
  for (var i = 0; i < correo.length; i++) {
    // Si se encuentra el carácter "@", el indicador cambia a verdadero
    if (correo[i] == "@") {
      indArroba = true;
    } else {
      // Si ya encontramos una arroba, concatenamos el carácter al dominio
     if (indArroba) {
      dominio += correo[i];
    }
  }
}
  return dominio;
}

const direccionCorreo = "jhondoe@ahk.com.ar";
const dominio = dominioDelCorreo(direccionCorreo);
console.log("el dominio del correo es: " + dominio);

//8. Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos arrays combinados alternativamente.

function combinarArrays(array1, array2) {
  const combinacion = [];
  const numeros = array1.length;
  const letras = array2.length;
  var arrayCorto;
  // determino cual es el array mas corto para alternarlos de mejor manera
  if (numeros < letras){
    arrayCorto = numeros;
  } else {
    arrayCorto = letras;
  }
  // Combinar los elementos con el array mas corto
  for (var m = 0; m < arrayCorto; m++) {
    combinacion.push(array1[m], array2[m]);
  }

  // Agregar los elementos restantes del array más largo, si hay alguno
  for (var m = arrayCorto; m < numeros; m++) {
    combinacion.push(array1[m]);
  }

  for (var m = arrayCorto; m < letras; m++) {
    combinacion.push(array2[m]);
  }

  return combinacion;
}
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c', 'd'];
const combinado = combinarArrays(array1, array2);
console.log(combinado);

//9. Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y todo el resto un 40%. Los menores de edad no abonan impuestos.


function calculoDeImpuestos(edad, ingresos) {
  var impuestos = 0;
 //impuesto del 10% (x0.10) para personas de 18 a 20  
 if (edad >= 18 && edad <= 20) {
  impuestos = ingresos * 0.10;
 } 
 //impuesto del 15% (x0.15)para personas de 21 a 30  
 else if (edad >= 21 && edad <= 30) {
  impuestos = ingresos * 0.15;
 } 
 //impuestos del 40% (x0.40) para personas mayores a 30  
 else if (edad > 30) {
  impuestos = ingresos * 0.40;
 }
  return impuestos;
}
const edad = 18;
const ingresos = 1000;
const impuestos = calculoDeImpuestos(edad, ingresos);
console.log("Los impuestos para una persona de " + edad + " años son: $" + impuestos);


//10. Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo de la cantidad de likes en formato de “K” para miles y “M” para millones.
function cantidadDeLikes(likes){
 if (likes < 1000){ 
  return '' + likes; // devuelve el numero sin resumir
  } 
  else if (likes < 1000000) {
   const parteEntera = likes / 1000 | 0; // Obtengo la parte entera de los likes en K    
   const parteDecimal = ((likes % 1000) / 100) | 0; // Obtengo la parte decimal de los likes en K   
   var likesResumidos = parteEntera + ""
   if (parteDecimal > 0) {
     likesResumidos += "." + parteDecimal;
    } 
    likesResumidos += "K";
     return likesResumidos;
  }
  else {
    const parteEntera = likes / 1000000 | 0; // Obtengo la parte entera de los likes en M   
    const parteDecimal = ((likes % 1000000) / 100000) | 0; //Obtengo la parte decimal de los likes en M   
    var likesResumidos = parteEntera + ""
    if (parteDecimal > 0) {
    likesResumidos += "." + parteDecimal;
    }
    likesResumidos += 'M'; 
    return likesResumidos;
  }
}

//console.log(cantidadDeLikes(1400)); 
console.log(cantidadDeLikes(34567)); 
//console.log(cantidadDeLikes(1234567));