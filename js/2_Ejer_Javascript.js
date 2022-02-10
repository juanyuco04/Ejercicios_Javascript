// ejercicio 3

let costoProducto = prompt("ingrse el valor del producto, sin impuesto ni costo domiciliario.") ;
 let impuestoProducto = 0.1 ;
 let costoDomicilio = 2000;

 costoProducto = parseInt(costoProducto);

 let costoTotal = (costoProducto * impuestoProducto ) + costoProducto ;
 let costoDomicilioTotal = costoTotal + costoDomicilio ;

 console.log("$" + costoTotal + " " + "costo total sin incluir el domicilio") ;
 console.log("$" + costoDomicilioTotal + " " + "costo total con domicilio incluido");

 //ejercicio 4

 let descuentoMayor = 0.1 ;
 let descuentoMenor = 0.05 ;

 let descuentoTotalMayor = costoDomicilioTotal - (costoDomicilioTotal * descuentoMayor);
 let descuentoTotalMenor = costoDomicilioTotal - (costoDomicilioTotal * descuentoMenor);



   function costoDescuento (){
       if(costoProducto >= 100000){
           console.log ("tendra un descuento del 10%, lo cual el producto tendra un total de " + descuentoTotalMayor )
        }
       else if (costoProducto >= 30000 && costoProducto < 100000){
           console.log("tendra un descuento del 5%; que equivale a un total de " + descuentoTotalMenor)
        }
       else  {
           console.log("No podra recibir un descuento en la compra");
        }
     }

   costoDescuento();
   