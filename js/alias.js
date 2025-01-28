"use strict";
let mat;
mat = "202030005";
mat = 20230005;
let luis = {
    id: 20230025,
    nombre: "luis",
    apellido: "valdivia",
    carrera: 5,
    estatus: true
};
function reporte(x) {
    console.log("el alumno " + x.nombre + " con matricula: " + x.id);
}
reporte(luis);
let terreno = {
    costo: 500,
    altura: 15,
    ancho: 10
};
console.log(terreno);
function calcule(x) {
    console.log(x.altura * x.ancho * x.costo);
}
calcule(terreno);
