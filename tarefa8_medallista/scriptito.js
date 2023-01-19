function resolve(posicion) {
    if (posicion == 1){
    	document.write("Medalla de oro");
    } else if (posicion == 2){
    	document.write("Medalla de plata");
    } else if (posicion == 3){
    	document.write("Medalla de bronce");
    } else {
    	document.write("No has logrado obtener ninguna medalla" );
    }
}
var puesto = prompt("Cal e o teu posto na competicion?");
resolve(puesto)