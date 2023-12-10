import { writeFile, readFile } from "node:fs/promises";
import { argv } from "node:process";

//const { operacion } = require('./operaciones.js')

const [elementos] = argv.slice(2);
//console.log(elementos);

const addCita = async (elementos) => {
    try {
        const citas = JSON.parse(await readFile('citas.json'));
        const cita = {
            nombre: elementos, 
            edad: elementos, 
            animal: elementos, 
            color: elementos, 
            enfermedad: elementos
        }
        citas.push(cita);
        await writeFile("citas.json", JSON.stringify(citas))
    } catch (error) {
        console.log(error)
    }
}

addCita(elementos)