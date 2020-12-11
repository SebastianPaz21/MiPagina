
function ejecutar() {

    let mensaje = document.getElementById("mensaje").value;
    let parrafo = document.getElementById("texto").value;
    if (mensaje.length >= 200) {
        alert("El mensaje contiene mas de 200 caracteres")
    }else if (mensaje.length === 0) {
        alert("El campo esta vacio")
    }else {
        if (parrafo.length > 0) {
            document.getElementById("texto").innerHTML =   mensaje + "<br>" + parrafo;
            document.getElementById('cont').innerHTML = "<br>" + mensaje + "<br>" + parrafo + "<br>"; 
        }else{
            document.getElementById('cont').innerHTML = "<br>" + mensaje + "<br>"; 
            document.getElementById("texto").innerHTML = mensaje;
        }
    }
}
