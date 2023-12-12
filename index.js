const {addCita, leerCita} = require('./operaciones.js')

const elementos = process.argv.slice(2);
const archivo = 'citas.json'
addCita(elementos);
leerCita(archivo)


if(elementos === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}

if(elementos === "leer"){
    leer(archivo)
}
