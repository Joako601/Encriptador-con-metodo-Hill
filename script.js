const mensaje = document.getElementById('mensaje');
const charCount = document.querySelector('.char-count');
const matrizMensaje = document.getElementById('matrizMensaje');
const k11 = document.getElementById('k11');
const k12 = document.getElementById('k12');
const k21 = document.getElementById('k21');
const k22 = document.getElementById('k22');
const btnEncriptar = document.getElementById('encriptar');
const resultado = document.getElementById('resultado');

const btnDesencriptar = document.getElementById('desencriptar');
const resultadoDes = document.getElementById('resultadoDesencriptado');
const mensajeEncriptado = document.getElementById('mensajeEncriptado');

const MOD = 27; 
mensaje.addEventListener('input', () => {
    const len = mensaje.value.length;
    charCount.textContent = `${len}/30`;
    mostrarMatrizMensaje();
});


function mostrarMatrizMensaje() {
    const texto = mensaje.value.toUpperCase().replace(/[^A-Z ]/g, ''); 
    
    if (texto.length === 0) {
        matrizMensaje.textContent = 'Escribe un mensaje primero...';
        return;
    }
    
    const valores = texto.split('').map(char => 
        char === ' ' ? 26 : char.charCodeAt(0) - 65 
    );
    
    let matriz = '[';
    for (let i = 0; i < valores.length; i += 2) {
        if (i > 0) matriz += ' ';
        matriz += '[' + valores[i];
        if (i + 1 < valores.length) {
            matriz += ', ' + valores[i + 1];
        } else {
            matriz += ', 26'; 
        }
        matriz += ']';
    }
    matriz += ']';
    
    matrizMensaje.textContent = matriz;
}


btnEncriptar.addEventListener('click', () => {
    const key = [
        [parseInt(k11.value) || 0, parseInt(k12.value) || 0],
        [parseInt(k21.value) || 0, parseInt(k22.value) || 0]
    ];
    
    if (key[0][0] === 0 && key[0][1] === 0 && key[1][0] === 0 && key[1][1] === 0) {
        resultado.textContent = 'Error: Ingresa una matriz clave válida';
        resultado.classList.add('error');
        return;
    }
    
    const texto = mensaje.value.toUpperCase().replace(/[^A-Z ]/g, ''); 
    
    if (texto.length === 0) {
        resultado.textContent = 'Error: Ingresa un mensaje';
        resultado.classList.add('error');
        return;
    }
    
    let numeros = texto.split('').map(char => 
        char === ' ' ? 26 : char.charCodeAt(0) - 65 
    );

   
function charToNum(c) {
    if (c === 'X') return 26; 
    return c.charCodeAt(0) - 65;
}

    
    if (numeros.length % 2 !== 0) {
        numeros.push(26); 
    }
    
    let encriptado = '';
    for (let i = 0; i < numeros.length; i += 2) {
        const v1 = numeros[i];
        const v2 = numeros[i + 1];
        
        const c1 = (key[0][0] * v1 + key[0][1] * v2) % MOD; 
        const c2 = (key[1][0] * v1 + key[1][1] * v2) % MOD; 
        
        function numToChar(n) {
    return n === 26 ? 'X' : String.fromCharCode(65 + n);
}

encriptado += numToChar(c1);
encriptado += numToChar(c2);
    }
    
    resultado.classList.remove('error');
    resultado.textContent = encriptado;
});



function charToNum(c) {
    if (c === 'X') return 26;    
    return c.charCodeAt(0) - 65;
}

function desencriptarMensaje() {
    const key = [
        [parseInt(k11.value) || 0, parseInt(k12.value) || 0],
        [parseInt(k21.value) || 0, parseInt(k22.value) || 0]
    ];

    if (key[0][0] === 0 && key[0][1] === 0 && key[1][0] === 0 && key[1][1] === 0) {
        resultadoDes.textContent = 'Error: Ingresa una matriz clave válida';
        resultadoDes.classList.add('error');
        return;
    }

    const texto = mensajeEncriptado.value.toUpperCase().replace(/[^A-Z]/g, '');

    if (texto.length === 0) {
        resultadoDes.textContent = 'Error: Ingresa un mensaje encriptado';
        resultadoDes.classList.add('error');
        return;
    }

    let det = (key[0][0] * key[1][1] - key[0][1] * key[1][0]) % MOD;
    if (det < 0) det += MOD;

    const inversos27 = {
        1:1, 2:14, 4:7, 5:11, 7:4, 8:17, 10:19, 11:5,
        13:25, 14:2, 16:22, 17:8, 19:10, 20:23, 22:16,
        23:20, 25:13
    };

    if (!inversos27[det]) {
        resultadoDes.textContent = 'Error: La matriz no es invertible modulo 27';
        resultadoDes.classList.add('error');
        return;
    }

    const detInv = inversos27[det];

    const invKey = [
        [( key[1][1] * detInv) % MOD, (-key[0][1] * detInv) % MOD],
        [(-key[1][0] * detInv) % MOD, ( key[0][0] * detInv) % MOD]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (invKey[i][j] < 0) invKey[i][j] += MOD;
        }
    }


    let numeros = texto.split('').map(char => charToNum(char));

    if (numeros.length % 2 !== 0) {
        resultadoDes.textContent = 'Error: El mensaje encriptado debe tener longitud par';
        resultadoDes.classList.add('error');
        return;
    }

    let desencriptado = '';
    for (let i = 0; i < numeros.length; i += 2) {
        const c1 = numeros[i];
        const c2 = numeros[i + 1];

        const p1 = (invKey[0][0] * c1 + invKey[0][1] * c2) % MOD;
        const p2 = (invKey[1][0] * c1 + invKey[1][1] * c2) % MOD;

        desencriptado += p1 === 26 ? ' ' : String.fromCharCode(65 + p1);
        desencriptado += p2 === 26 ? ' ' : String.fromCharCode(65 + p2);
    }

    resultadoDes.classList.remove('error'); 
    resultadoDes.textContent = desencriptado;
}   

btnDesencriptar.addEventListener('click', desencriptarMensaje);
