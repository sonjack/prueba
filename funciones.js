function estudiantes() {
    var estudiantes = [1.2, 3.6, 5.0, 2.3, 3.2, 4.2, 1.3, 2.0, 4.0, 2.1, 2.3, 0.5, 1.5, 4.9];
    var promedio = 0;
    var notaMenor = estudiantes[0];
    var notaMayor = estudiantes[0];
    var aprobados = 0;
    var mensaje = "";
    for (var i in estudiantes) {

        if (notaMayor < estudiantes[i]) {
            notaMayor = estudiantes[i]
        }
        if (notaMenor > estudiantes[i]) {
            notaMenor = estudiantes[i]
        }
        if (estudiantes[i] >= 3.0) {
            aprobados++
        }
        promedio = promedio + estudiantes[i];
    }
    mensaje = "El promedio de clasificaciones es de: " + promedio / estudiantes.length + "  la nota mayor fue de: " + notaMayor + "  la nota menor fue de: " + notaMenor + " Cantidad de estudiantes aprobados: " + aprobados;
    document.getElementById("estudiantes").innerHTML = mensaje;

}

function dados() {
    var dado1 = 0;
    var dado2 = 0;
    var mensaje = "";
    var contador = 0;
    for (var i = 0; i < 20; i++) {
        dado1 = Math.round(Math.random() * (6 - 1));
        dado2 = Math.round(Math.random() * (6 - 1));
        mensaje += "Tirada numero " + (i + 1) + " dado 1: " + dado1 + " | dado 2: " + dado2 + "<br>";
        if ((dado1 + dado2) == 10) {
            contador++
        }

    }
    mensaje += "numero de veces que la suma de los dos dados dio 10: " + contador;

    document.getElementById("dados").innerHTML = mensaje;
}

function convertirNumeroRomano() {
    var numero = document.getElementById("numero").value;
    var numeroRomano = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        roman = '';
    for (var i in numeroRomano) {
        while (numero >= numeroRomano[i]) {
            roman += i;
            numero -= numeroRomano[i];
        }
    }
    document.getElementById("romano").innerHTML = roman;
}