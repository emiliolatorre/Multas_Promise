// VARIABLES

const sectionBtn = document.querySelector('#sectionBtn');
const btn = document.querySelector('#btn');
const tablaMultas = document.querySelector('#tablaMultas');
const regExp = /^(\d{3})-([A-Z]{2})$/;

let matriculaValidada = []

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
        matricula: '987-TY',
        multas: ['multa1', 'multa2'],
    },
    {
        matricula: '576-RD',
        multas: ['multa1'],
    }
    

];

// Evento
btn.addEventListener('click', (event) => {
    validarMatriculas();

})

// Funciones

const validarMatriculas = async()=> {
    const matricula = sectionBtn.querySelector('input').value;

    if (regExp.test(matricula)) {
        matriculaValidada = arrayCoches.find((elemento) => elemento.matricula === matricula);
        if (matriculaValidada) {
            getInfoMultas()
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>alert(error))
        } else {
            alert('Este coche no esta registrado en la BBDD.')
        }
    } else {
        alert('el campo no puede estar vacio.')
        return
    };
};

const comprobarMulta = async(matriculaValidada) => {
    const multaEncontrada = arrayMultas.find((elemento) => elemento.matricula === matriculaValidada.matricula);
    if (multaEncontrada) {
        matriculaValidada.multas = multaEncontrada.multas.length;
        return pintarMultas(matriculaValidada)
    }else throw('Esta matricula no tiene multas')
}

const pintarMultas = (matriculaValidada => {
    tablaMultas.innerHTML = '';
    const trBody = document.createElement('tr');
    const tdMatricula = document.createElement('tr');
    const tdModelo = document.createElement('tr');
    const tdPropietario = document.createElement('tr');
    const tdMultas = document.createElement('tr');

    tdMatricula.textContent = matriculaValidada.matricula;
    tdModelo.textContent = matriculaValidada.modelo;
    tdPropietario.textContent = matriculaValidada.propietario;
    tdMultas.textContent = matriculaValidada.multas;

    trBody.append(tdMatricula, tdModelo, tdPropietario, tdMultas);

    tablaMultas.append(trBody);
});

const getInfoMultas = async() => {
    try {
        const matricula=await comprobarMulta(matriculaValidada);
    } catch (error) {
        throw error
    }
}
