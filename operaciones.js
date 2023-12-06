const fs = require('fs');

const cita = [{
    nombredeanimal:"kiko",
    edad: "",
    tipodeanimal:"",
    colordeanimal:"",
    enfermedad:"",
},
{
    nombredeanimal:"lolo",
    edad: "",
    tipodeanimal:"",
    colordeanimal:"",
    enfermedad:"",
}
]
fs.writeFileSync("citas.json", JSON.stringify(cita))
