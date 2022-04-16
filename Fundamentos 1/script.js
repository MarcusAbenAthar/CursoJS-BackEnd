//var pode ser chamado antes da criaÃ§Ã£o do mesmo

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

//definindo uma variável com let

// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retÃ¢ngulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

//definindo uma constante 'const'

// const forma = 'triangulo';
// const altura = 5;
// const comprimento = 7;
// let area;

// if (forma === 'quadrado') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

//boolean

// console.log(0 == false);
// console.log("" == false);
// console.log(1 == true);

// undefined

//null ==> vazio ou nada

// let minhaVar;
// let varNull = null;

// console.log(minhaVar);
// console.log(varNull);

// let numero = 3;
// let texto = 'Alura';

// console.log(typeof numero);
// console.log(typeof texto);
// console.log(typeof minhaVar);
// console.log(typeof varNull);

//conversÃµes de dados

//boolean

//conversÃ£o implÃ­cita

// const numero = 456;
// const numeroString = '456';

// console.log(numero === numeroString); //=== - Serve para comparar o conteÃºdo e o tipo da variÃ¡vel
//console.log(numero == numeroString); //== - Serve para comparar apenas o conteÃºdo da variÃ¡vel

//conversÃ£o explÃ­cita

//Number() & String()

//console.log(numero + Number(numeroString));

// == -> comparaÃ§Ã£o implÃ­cita

// const n = 5;
// const txt = '5';
// console.log(n == txt);

// === -> comparaÃ§Ã£o explÃ­cita

//const n = 5;
//const txt = '5';
// console.log(n === txt);

//typeof

// const n = 5;
// const txt = '5';
// console.log(typeof n);
// console.log(typeof txt);

// let minAge = 18;
// let currAge = 16;

// if (currAge >= minAge) {
//     console.log('Cerveja');
// } else {
//     console.log('Suco');
// }

// console.log(currAge >= minAge ? 'Cerveja' : 'Suco');

// const nome = 'Marcus';
// const idade = 28;
// const cidade = 'SÃ£o Paulo';
// const apresentacao = `Meu nome Ã© ${nome}, minha idade Ã© ${idade} e nasci na cidade de ${cidade}.`; //ConcatenaÃ§Ã£o no JS

// console.log(apresentacao);

// function imprimeTexto(texto) {
//     console.log(texto);
// }

// imprimeTexto("OlÃ¡! Eu fui impresso!");

// function nomeIdade(nome, idade) {
//     return `Meu nome é ${nome} e a minha idade é ${idade}`;
// }
// console.log(nomeIdade(28, 'Marcus'));

// function soma(n1, n2) {
//     return n1 + n2;
// }
//  console.log(soma(3, 5));

// function multiplica(n1 = 1, n2 = 1) {
//     return n1 * n2;
// }
// console.log(multiplica(soma(4, 5), soma(3, 3)));


//expressão de função
// console.log(apresentar());
//HOISTING = O js lê o código e organiza, colocando as funções e variáveis no topo, sendo assim a função declarada pode ser chamada
//a qualquer momento, diferente da expressada.
// const soma = function (num1, num2) { return num1 + num2 };
// console.log(soma(1, 3));

// function apresentar() {
//     return 'Olá!';
// }

//ARROW Function

const apresentarArrow = nome => `Meu nome é ${Marcus}`;
const soma = (n1, n2) => n1 + n2;

//arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (n1, n2) => {
    if (n1 || n2 > 10) {
        return 'Apenas números de 1 a 9.';
    } else {
        return n1 + n2;
    }
}
