// painel onde aparecerá os números e operadores
const painel = document.getElementById("painel");

//numeros da calculadora
const numeros = document.querySelectorAll('[number]');

//operadores matemáticos da calculadora
const operadores = document.querySelectorAll("[data-operator]");

//apaga os elementos do painel onclick
const apagar = document.querySelector("[corrigir]");

//sinal de resultado
const result = document.querySelector("[result]");


//lógica para ajustar a calculadora
let $isSinal = false;


numeros.forEach(numero => {
    numero.addEventListener('click', (el) => {

        // se o valor encontrado no painel for 0
        if (painel.innerHTML === '0') {
            // ele será igual ao valor do número que for clicado
            painel.innerHTML = el.target.innerHTML;
        } else {
            // com o valor atualizado, o else verifica se o valor no painel, se ele não for igual a 0, então o próximo número será concatenado
            painel.innerHTML += el.target.innerHTML;
        }
        //o sinal é definido como falso quando um número é clicado
        $isSinal = false;
    });
});

operadores.forEach(operador => {
    operador.addEventListener('click', (op) => {
        //verifica se a variavel é false, então ela é mudada para true;
        //fazendo com que o operador seja adicionado apenas uma vez
        if (!$isSinal) {
            $isSinal = true;
            // para funcionar o operador eval() mudamos o operador X para *, porque caso contrário a operação não funciona
            if (op.target.innerHTML == 'X') {
                //então o painel recebe o operador *
                painel.innerHTML += "*";
            } else {
                painel.innerHTML += op.target.innerHTML;
            }
        }

    });
});



result.addEventListener('click', () => {
    let resultado = eval(painel.innerHTML);
    painel.innerHTML = resultado;
})


apagar.addEventListener('click', () => {
    painel.innerHTML = 0;

})




