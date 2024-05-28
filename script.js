// VARIABLES

const sectionBtn = document.querySelector('#sectionBtn');
const btn = document.querySelector('#btn');
const tablaMultas = document.querySelector('#tablaMultas');
const regExp = /^(\d{3})-([A-Z]{2})$/;
const divAvisos = document.querySelector('#sectionBtn div')

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

btn.addEventListener('click', () => {
    tablaMultas.innerHTML = '';
    validarMatriculas();
})

const validarMatriculas = async () => {
    const matriculaIngresada = sectionBtn.querySelector('input').value;
    divAvisos.innerHTML = '';

    if (regExp.test(matriculaIngresada)) {
        const matriculaValidada = arrayCoches.find((obj) => obj.matricula === matriculaIngresada);
        if (matriculaValidada) {
            try {
                await getInfoMultas(matriculaValidada);
            } catch (error) {
                alert(error);
            }
        } else {
            divAvisos.innerHTML = '<p>Matricula no registrada en BBDD</p>';
        }
    } else {
        divAvisos.innerHTML = '<p>Matricula incorrecta</p>'
    };
};

const comprobarMulta = async (matriculaValidada) => {
    const multaEncontrada = arrayMultas.find((obj) => obj.matricula === matriculaValidada.matricula);
    if (multaEncontrada) {
        matriculaValidada.multas = multaEncontrada.multas.length;
        return pintarMultas(matriculaValidada)
    } else{
        throw 'Esta matricula no tiene multas';
    } 
}

const pintarMultas = (matriculaValidada) => {
    tablaMultas.innerHTML = '';
    const trBody = document.createElement('tr');
    const tdMatricula = document.createElement('td');
    const tdModelo = document.createElement('td');
    const tdPropietario = document.createElement('td');
    const tdMultas = document.createElement('td');

    tdMatricula.textContent = matriculaValidada.matricula;
    tdModelo.textContent = matriculaValidada.modelo;
    tdPropietario.textContent = matriculaValidada.propietario;
    tdMultas.textContent = matriculaValidada.multas;

    trBody.append(tdMatricula, tdModelo, tdPropietario, tdMultas);

    tablaMultas.append(trBody);
};

const getInfoMultas = async (matriculaValidada) => {
    try {
        await comprobarMulta(matriculaValidada);
    } catch (error) {
        divAvisos.innerHTML = (error)
    }
}
