const fs = require('fs').promises;
const { argv } = require('process');

const [nombre, edad, animal, color, enfermedad] = argv.slice(2);
//const [elementos] = 
const addCita = async (elementos) => {
    try {
        const citas = JSON.parse(await fs.readFile('citas.json'));
        const cita = {
            nombre: elementos[0], 
            edad: elementos[1], 
            animal: elementos[2], 
            color: elementos[3], 
            enfermedad: elementos[4]
        }
        citas.push(cita);
        await fs.writeFile("citas.json", JSON.stringify(citas))
    } catch (error) {
        console.log(error)
    }
};

const archivo = "citas.json"
const leerCita = async (archivo) => {
    try {
        const contenidos = await fs.readFile(archivo);
        const datos = JSON.parse(contenidos);
        console.log(datos)
    } catch (error) {
        console.log(error)
    }
};

/*  
if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}

if(operacion === "leer"){
    leer()
} */
 
module.exports = { addCita, leerCita }