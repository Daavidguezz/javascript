var desexo = true;
while (desexo == true) {  






var producto = prompt("Que producto acabas de mercar?");
var precio = prompt("Cuanto cuesta el producto?");
var moneda = prompt("Que moneda acabas de usar, euro o yen?");


switch (moneda) {

    
    
    case "euro":
    document.write ("Producto: "+producto + "<br>");
    document.write ("Precio en euros: "+precio + "<br>");
    document.write ("Precio en yenes: "+precio*139.09 + "<br>" + "<br>");
    desexo = confirm("Queres volver a empezar?");
    break;
    

    case "yen":
        document.write ("Producto: "+producto + "<br>");
        document.write ("Precio en euros: "+precio/139.09 + "<br>");
        document.write ("Precio en yenes: "+precio + "<br>" + "<br>");
        desexo = confirm("Queres volver a empezar?");
    break;


    default: alert ("No has elegido ni euro ni yen, vuelve a intentarlo");
    desexo = confirm("Queres volver a empezar?");


}
}
    

    