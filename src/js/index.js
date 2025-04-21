// Objetivo: Verificar los campos completados, (TRUE = GREEN) (FALSE = RED + TEXT).

// Paso 1: Declarar las variables para obtener acceso a los "input" y "span" correspondientes.

// Paso 2: Crear un detector de eventos en el btn-enviar(click).

// Paso 3: Crear la condición (if) dentro de un (foreach) para saber si los campos están completados y cuales.

const inputs = document.querySelectorAll('.inputs');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio')

const btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', () => {
    inputs.forEach((input, inputAtual) => {
        const estaPreenchido = input.value !== "";

        if (estaPreenchido) {
            input.classList.add('esta-preenchido');
            input.classList.remove('nao-esta-preenchido');
            campoObrigatorio[inputAtual].classList.remove('mostrar-campo-obrigatorio')
        } else {
            input.classList.add('nao-esta-preenchido');
            input.classList.remove('esta-preenchido');
            campoObrigatorio[inputAtual].classList.add('mostrar-campo-obrigatorio')
        }

    });

})
