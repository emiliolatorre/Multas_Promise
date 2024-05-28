// VARIABLES

const sectionBtn = document.querySelector('#sectionBtn');
const tablaMultas = document.querySelector('#tablaMultas');
const regExp = /^(\d{3})-([A-Z]{2})$/;

const arrayCoches = [
    {
        matricula: '134-KU',
        modelo: 'modelo1',
        propietario: 'Pepe'
    },
    {
        matricula: '154-OM',
        modelo: 'modelo2',
        propietario: 'Juan'
    },
    {
        matricula: '576-RD',
        modelo: 'modelo3',
        propietario: 'Hector'
    },
    {
        matricula: '987-TY',
        modelo: 'modelo4',
        propietario: 'Antonio'
    },
    {
        matricula: '453-BN',
        modelo: 'modelo5',
        propietario: 'Guillermo'
    }
];

const arrayMultas = [
    {
        matricula: '134-KU',
        multas: ['multa1', 'multa2'],
    },
    {
        matricula: '154-OM',
        multas: ['multa1', 'multa2', 'multa3', 'multa4'],
    },
    {
        matricula: '576-RD',
        multas: ['multa1'],
    },
    {
        matricula: '987-TY',
        multas: ['multa1', 'multa2'],
    },
    {
        matricula: '453-BN',
        multas: ['multa1'],
    },
    {
        matricula: '134-KU',
        multas: ['multa1', 'multa2', 'multa3', 'multa4', 'multa5'],
    },

];


// BOTON: