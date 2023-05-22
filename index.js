const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs")

console.log(argv);

crearArchivo(argv.b, argv.h)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado`))
  .catch((err) => console.log(err));

