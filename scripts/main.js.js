// Coisas interessantes para saber sobre o console.log:

console.log('Hello World');
console.error('Error test');
console.warn('Warning test');

//  Constantes e variáveis:

const favoritenumber = 7; // Constante - não pode ser alterado ou inicializado depois de declarado.
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

console.log(myname.length); // Mostra o tamanho da string.
console.log(myname.toUpperCase()); // Transforma tudo em maiúscula.
console.log(myname.toLowerCase()); // Transforma tudo em minúscula.
console.log(myname.substring(0,3)); // "Interrompe" a string até o índice indicado.

const myfavoritecolors = 'blue, green';
console.log(myfavoritecolors.split(', ')); // Divide a string em uma "lista ordenada" de substrings pela indicação de um patrão entre elas.

// Arrays - duas maneiras de criá-las:

const numbers = new Array (1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apple', 'orange', 'pear'];
console.log(fruits[0]); // ATENÇÃO! Sempre inicia-se pelo zero, porém dentro da array há três valores!

// Manipular elementos dentro de arrays - duas maneiras:

fruits[3] = 'grape'; // Quando você sabe quantos valores há nela.
fruits.push('mango'); // Quando você não sabe (vai adicionar no fim da array).
fruits.unshift('strawberry'); // Quando você quer adicionar no começo da array.
fruits.pop(); // Quando você quer remover o último elemento.
console.log(Array.isArray(fruits)); // Quando você quer saber se a variável é uma array.
console.log(fruits.indexOf('orange')); // Quando você quer saber o índice/posição daquele valor dentro da array.




/*💻💙*/




// OBJECT LITERAL:

const person = {
    firstName: 'Ana',
    lastName: 'Cristina',
    age: 23,
    hobbies: ['music', 'books', 'sports', 'study', 'games'],
    address: {
        street: 'Somewhere Over The Rainbow st',
        city: 'Somewhere',
        state: 'SC',
        country: 'Brazil'
    }
}

console.log(person.firstName); // Mostrar valores de uma das propriedades do objeto.
console.log(person.hobbies[0]); // Quando há uma array de valores dentro de uma das propriedades do objeto.
console.log(person.address.country); // Quando há um objeto dentro de um objeto.

person.email = 'anacrispee@gmail.com'; // Quando quer se adicionar uma nova propriedadde ao objeto.
console.log(person.email);

// OBJECT CONSTRUCTOR

const boyfriend = new Object();
boyfriend.name = 'João';
boyfriend.age = 22;
boyfriend.favfoods = ['pão de queijo', 'bis de oreo', 'água com gás'];

console.log(boyfriend.favfoods);

// CONSTRUCTOR PATTERN

function car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.describecar = function() {
        return this.model + ' year ' + this.year + ' has done ' + this.miles + ' miles';
    };
}

let ranger = new car("Ford Ranger Raptor", 2019, 2000);
let ram = new car("RAM 2.5", 2020, 3000);

console.log(ranger.describecar());
console.log(ram.describecar());
console.log(ram.model);

// ARRAYS DE OBJETOS

let todolist = [ 
    {
        id: 1,
        text: 'lavar a louça',
        isCompleted: true
    },
    {
        id: 2,
        text: 'lavar roupas',
        isCompleted: false
    },
    {
        id: 3,
        text: 'estudar',
        isCompleted: false
    }
]

console.log(todolist); // Imprime toda a array com seus objetos.
console.log(todolist[1].text); // Imprime apenas uma das propriedades de um dos objetos de dentro da array, indicado pelo índice.

// Usando loop para acessar objetos da array:
// imprime cada objeto separadamente:
for (let todo of todolist) {
    console.log(todo);
}

// imprime apenas as propriedades indicadas dos objetos.
for (let todo of todolist) {
    console.log(todo.text);
}

// ForEach para acessar propriedades dos objetos da array:
todolist.forEach(function(todo) {
    console.log(todo.text);
})

// Map:
const todolistText = todolist.map(function(todo) {
    return todo.text;
});

console.log(todolistText);

// Filter:
const todolistCompleted = todolist.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todolistCompleted);

// Filter + map:
const todoCompleted = todolist.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);




/*💻💙*/




// LOOPS

// For:
for(i=0; i<=10; i++) {
    console.log(i);
}

// While:
let a = 0;

while (a<=10){
    console.log(a);
    a++;
}

// CONDITIONALS

//if-else, switch-case 



/*💻💙*/



// FUNCTIONS



/*💻💙*/



// DOM



/*💻💙*/




//EVENTS