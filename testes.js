const testeObjeto = [
    {
        number: 2,
        question: "O que é o GIL (Global Interpreter Lock) em Python?",
        options: [
            "Um mecanismo que permite múltiplas threads executarem simultaneamente",
            "Um lock que permite apenas uma thread executar bytecode por vez",
            "Um sistema de garbage collection",
            "Um gerenciador de memória para CPython"
        ],
        answer: "Um lock que permite apenas uma thread executar bytecode por vez"
    },
    {  
        number: 1,
        question: "Qual é a diferença entre 'is' e '==' em Python?",
        options: [
            "'is' compara valores, '==' compara identidades",
            "'is' compara identidades, '==' compara valores",
            "Ambos comparam valores de forma idêntica",
            "'is' é para números, '==' é para strings"
        ],
        answer: "'is' compara identidades, '==' compara valores",
    }
];

// Ordenar do menor para o maior número
testeObjeto.sort((a, b) => a.number - b.number);

console.log(testeObjeto);
