 let costoProducto = 55000 ;
 let impuestoProducto = 0.1 ;
 let costoDomicilio = 2000;

 let costoTotal =  costoProducto * impuestoProducto + costoProducto ;
 let costoDomicilioTotal = costoTotal + costoDomicilio ;

 console.log(costoTotal + " " + "costo total sin incluir el domicilio") ;
 console.log(costoDomicilioTotal + " " + "costo total con domicilio incluido");