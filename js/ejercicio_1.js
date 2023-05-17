"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

if (numero1 > numero2) 
        {document.write(' El primer numero ingresado '+numero1+' es el mas grande');}
     else if (numero1 < numero2) 
           {document.write(' El segundo numero ingresado '+numero2+' es el mas grande');}
       else 
              {document.write(' Los numeros ingresados son iguales');}


    if (numero1 > 0)
         {document.writeln(' El primer numero ingresado es mayor a 0');}
      else if (numero1 < 0)
           {document.writeln(' El primer numero ingresado es menor a 0');}
         else 
             {document.writeln(' El numero es igual a 0');} 
          

    if ((numero1 > 0) && (numero1 < 100))
        {document.writeln(' El primer numero ingresado es mayor a 0 y menor que 100');}
  
    if ((numero1 < 10) || (numero2 > -2))
          {if (numero1 < 10) 
                document.writeln(' El primer numero ingresado es menor que 10');
            if (numero2 > -2)
                 document.writeln(' El segundo numero ingresado es mayor que -2')}
  

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
