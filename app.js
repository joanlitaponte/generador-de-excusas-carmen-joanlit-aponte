window.onload = function () {
    let quien = ["Mi perro", "Mi gato", "Mi abuela", "Un alienigena", "Mi vecino"];

    let accion = ["se comio", "rompio", "mojo", "perdio", "destruyo"];

    let cosa = ["mi tarea", "mi ordenador", "mi mlovil", "mis apuntes", "mi mochila"];

    let cuando = ["antes de la clase", "cuando estaba durmiendo", "esta mañana", "anoche", "mientras estudiaba"];

    let randomQuien = Math.floor(Math.random() * quien.length);
    let randomAccion = Math.floor(Math.random() * accion.length);
    let randomCosa = Math.floor(Math.random() * cosa.length);
    let randomCuando = Math.floor(Math.random() * cuando.length);

    let excusa = quien[randomQuien] + " " + accion[randomAccion] + " " + cosa[randomCosa] + " " + cuando[randomCuando];

    document.querySelector("#excuse").innerHTML = excusa;

};