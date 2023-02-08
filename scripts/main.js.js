// Coisas interessantes para saber sobre o console.log:

console.log('Hello World');
console.error('Error test');
console.warn('Warning test');

//  Constantes e variáveis:

const favoritenumber = '7'; // Constante - não pode ser alterado ou inicializado depois de declarado.
let todayslunch = 'potatos and pork'; // Pode variar seu valor e ser inicializado depois.

// Data types: strings, numbers, boolean (true,false), null, undefined.
// Exemplos de data types:

const myname = 'Ana Cristina';
const myage = 23;
const rating = 7.5;
const isCool = true;
const x = null;
const y = undefined;

// Concatenation:

console.log('My name is ' + myname + ' and my age is ' + myage);

// Alguns métodos e propriedades interessantes:

console.log(myname.length);
console.log(myname.toUpperCase);
console.log(myname.toLowerCase);
console.log(myname.substring(0,3));

const myfavoritecolors = 'blue, green';
console.log(myfavoritecolors.split(', '));

// Arrays - duas maneiras de criá-las:

const numbers = new Array (1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apple', 'orange', 'pear'];
console.log(fruits[0]); // ATENÇÃO! Sempre inicia-se pelo zero, porém dentro da array há três valores!

// Manipular elementos dentro de arrays - duas maneiras:

fruits[3] = 'grape'; // Quando você sabe quantos valores há nela.
fruits.push('mango'); // Quando você não sabe.
fruits.unshift('strawberry'); // Quando você quer adicionar no começo da array.
fruits.pop(); // Quando você quer remover o último elemento.
console.log(Array.isArray(fruits)); // Quando você quer saber se a variável é uma array.
console.log(fruits.indexOf('orange')); // Quando você quer saber o índice/posição daquele valor dentro da array.




//💻💙





// OBJECT LITERAL:

const person = {
    firstName: 'Ana',
    lastName: 'Cristina',
    age: 23,
    hobbies: ['music', 'books', 'sports', 'study', 'games'],
    address: {
        street: 'Somewhere Over The Rainbow st',
        city: 'Green Fields',
        state: 'SC',
        country: 'Brazil'
    }
}

console.log(person.firstName);
console.log(person.hobbies[0]);
console.log(person.address.country);

person.email = 'anacrispee@gmail.com'; // adiciona uma propriedadde no objeto, neste caso o email.
console.log(person.email);

// OBJECT CONSTRUCTOR

// CONSTRUCTOR PATTERN

// ARRAYS DE OBJETOS