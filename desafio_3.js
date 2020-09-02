
/*  
Crear un algoritmo que, dado una lista de dias, lo recorra e indique los números que son pares.
En el mismo algoritmo, antes de la condición anterior, incorporar un condicional, donde: 
si el dia es el número 7, imprima un alert con un mensaje personalizado.

 */
var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
function dias_semana(){
    debugger
    for ( var i = 0; i < 7; i ++)
    {
        
            if( i == 6) {
                alert ("Este es el ultimo día de la semana");
            }
                if( i % 2 == 0)
                {
                    console.log(dias[i]);
                }
            

        
    }
}
