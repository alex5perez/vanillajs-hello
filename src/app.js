//Funcion para sacar una excusa aleatoria
function showExcuseRandom() {
    //Indice aleatorio de las frases
    const index = Math.floor(Math.random() * excuses.length);
    const excuseRandom = excuses[index];
    //Cambiamos el texto con la id #excuse a una nueva excusa
    document.getElementById("excuse").innerText = excuseRandom;
}

//Array con las excusas
const excuses = [
    "Ayer estaba malo.",
    "Me atracaron y me robaron los deberes.",
    "Tuve una cita y no tuve tiempo.",
    "No tenia internet.",
    "Se cayeron las hojas en un cubo de agua."
];

//Funcion para cuando recargamos la pagina window.onload
window.onload = function(){
    showExcuseRandom();
}
