type matricula=string|number;


type alumno={
    id:matricula,
    nombre:string,
    apellido:string,
    carrera:number,
    estatus:boolean
}

let mat:matricula;
mat = "202030005";
mat = 20230005;

let luis:alumno={
    id:20230025,
    nombre:"luis",
    apellido:"valdivia",
    carrera:5,
    estatus:true
}

function reporte(x:alumno):void {
    console.log("el alumno " + x.nombre + " con matricula: " + x.id)
}

reporte(luis)


interface rectangulo {
    altura:number,
    ancho:number
}

interface lote extends rectangulo {
    costo:number
}

let terreno:lote = {
    costo:500,
    altura:15,
    ancho:10
}

console.log(terreno)

function calcule(x:lote):void {
    console.log(x.altura * x.ancho * x.costo)
}

calcule(terreno)