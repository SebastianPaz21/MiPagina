var esNoche = true;
function noche() {
    if (esNoche) {
        document.body.style.backgroundColor = "blue";
        esNoche = false;
    }else{
        document.body.style.backgroundColor = "yellow";
        esNoche = true;
    }


    // var noche = document.getElementById("noche").value;
    // var noche_N = noche.getBoundingClientRect();
    // var noche_D = noche_N.backgroundColor.toString();

}

function getDate() {
    var today = new Date();
    console.log(today.getFullYear() + " ; " + (today.getMonth()) + " ; " + (today.getHours()) + " ; " + (today.getMinutes()));
}
function show() {
    fruit = ["pera","mago","fresa"];
    var texto = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}