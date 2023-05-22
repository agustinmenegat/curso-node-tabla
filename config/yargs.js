const argv = require('yargs')
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 3,
        describe: 'Es el número base para la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 12,
        describe: 'Indica hasta que n° se multiplicará'
    })
    .check((argv, options) => {
        if (argv.l !== true) {
            throw 'Para mostrar listado debe pasar la opción -l'
        }

        return true
    })
    .argv

    module.exports = argv