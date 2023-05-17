"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

if (texto1 > texto2) 
     {confirm(' El primer texto ingresado es: '+texto1+' es mayor al segundo texto ingresado');}
   else if  (texto1 < texto2)
          {confirm(' El segundo texto ingresado es: '+texto2+' es mayor al primer texto ingresado');}
       else
        {confirm(' Ambos textos son iguales ');} 


//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

const copiaTexto1 = texto1; // Copia de la variable texto1

if ((copiaTexto1) == (texto1))
      {document.write(' la constante copiatexto1 es igual al texto1 ');}

 if ((copiatexto1) > (texto2) || (copiatexto1) < (texto2))     
       {document.write(' la constante copiatexto1 es distinta al texto2 ');}
    
 
  
// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
