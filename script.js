// VARIABLES

const sectionBtn = document.querySelector('#sectionBtn');
const btn = document.querySelector('#btn');
const tablaMultas = document.querySelector('#tablaMultas');
const errores = document.querySelector('#errores')
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
        matricula: '987-TY',
        multas: ['multa1', 'multa2'],
    },
    {
        matricula: '576-RD',
        multas: ['multa1'],
    }
    

];

// EVENTOS
btn.addEventListener('click', () => {
    errores.innerHTML='';
    getInfoMultado()
	.then((respuesta)=>{console.log(respuesta)})
	.catch((error)=>{console.log(error)})
})

// Funcion validarMatricula

const validarMatricula=async()=>{
    const matricula = sectionBtn.querySelector('input').value;
        if(regExp.test(matricula)) return matricula
        else throw errores.innerHTML = 'la matrícula debe tener un formato xxx-AB.'
};

// Funcion validarCoche
const validarCoche = async(matricula) => {
    let cocheValidado = arrayCoches.find((elemento) => elemento.matricula === matricula);
    let arrayFinal = {...cocheValidado}
    if(cocheValidado) return arrayFinal
    else throw errores.innerHTML = 'Este coche no esta registrado en la BBDD.'
};

// Función validarMultas
const validarMultas = async(arrayFinal) => {
    const multaValidada = arrayMultas.find((elemento) => elemento.matricula === arrayFinal.matricula);
    if(multaValidada) {
        arrayFinal.multas = multaValidada.multas.length;
        return arrayFinal
    }
    else throw errores.innerHTML = `El coche con matricula ${arrayFinal.matricula} no tiene multas`
};

// Función pintarMultas
const pintarMultas = (arrayFinal => {
    tablaMultas.innerHTML = '';
    const trBody = document.createElement('tr');
    const tdMatricula = document.createElement('td');
    const tdModelo = document.createElement('td');
    const tdPropietario = document.createElement('td');
    const tdMultas = document.createElement('td');

    tdMatricula.textContent = arrayFinal.matricula;
    tdModelo.textContent = arrayFinal.modelo;
    tdPropietario.textContent = arrayFinal.propietario;
    tdMultas.textContent = arrayFinal.multas;

    trBody.append(tdMatricula, tdModelo, tdPropietario, tdMultas);

    tablaMultas.append(trBody);
});


// Función madre
const getInfoMultado=async()=>{
    try{
      const matricula = await validarMatricula();
      const arrayFinal = await validarCoche(matricula);
      const arrayFinal2 = await validarMultas(arrayFinal);

      return pintarMultas(arrayFinal2);

    }catch(error){
	throw error
    }
}









// const validarMatriculas = async()=> {
//     const matricula = sectionBtn.querySelector('input').value;

//     if (regExp.test(matricula)) {
//         matriculaValidada = arrayCoches.find((elemento) => elemento.matricula === matricula);
//         if (matriculaValidada) {
//             getInfoMultas()
// .then((respuesta)=>{console.log(respuesta)})
// .catch((error)=>alert(error))
//         } else {
//             alert('Este coche no esta registrado en la BBDD.')
//         }
//     } else {
//         alert('el campo no puede estar vacio.')
//         return
//     };
// };

// const comprobarMulta = async(matriculaValidada) => {
//     const multaEncontrada = arrayMultas.find((elemento) => elemento.matricula === matriculaValidada.matricula);
//     if (multaEncontrada) {
//         matriculaValidada.multas = multaEncontrada.multas.length;
//         return pintarMultas(matriculaValidada)
//     }else throw('Esta matricula no tiene multas')
// }


// const getInfoMultas = async() => {
//     try {
//         const matricula=await comprobarMulta(matriculaValidada);
//     } catch (error) {
//         throw error
//     }
// }
