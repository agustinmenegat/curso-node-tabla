const fs = require("fs");

const crearArchivo = async (base, hasta) => {
  let salida = "";

  try {
    for (let i = 0; i < hasta; i++) {
      const resultado = base * i;
      salida += `${base} x ${i} = ${resultado}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`
  } catch (error) {
    console.log(error);
  }
};

module.exports = { crearArchivo };