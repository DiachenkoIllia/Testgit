// Термины: Рекурсия – это термин в программировании, означающий вызов функцией самой себя. 
// Рекурсивные функции могут быть использованы для элегантного решения определённых задач. 
// Когда функция вызывает саму себя, это называется шагом рекурсии.

// Пример рекурсии 
let t = 0;
function f1() {
  t++;
  console.log(t);
  if (t === 100) return;
  f1();
}
// f1();

// цикл 
function f2(){
  let out = '';
  for (let i = 1; i <=30; i++){

    out += i + ' ';
  }
  console.log(out);
}

// f2();
// рекурсией
let i = 0;
let out ='';
function f3() {
  i++;
  out += i + ' ';
  if( i > 30) return;
  f3();
}
// f3();
// console.log(out);

// лицо с низкой социальной ответсвтенностью...
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion(){
  let m = randomInteger(0, 100);
  console.log('add' + m);
  s1 += m;
  console.log('sum: ' + s1);
  if (s1 >= 300) return;
  moneyRecursion(); 
}

// moneyRecursion();

function moneyCycle(){
  let s2 = 0;
  for(let i = 0; true; i++){
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s2 += m;
    console.log('sum; ' + s2);
    if (s2 >= 300) return;
  }
}
  // moneyCycle();

let s = 228;
for(let i = 10; i >= 5; i--){
  console.log(i)
}
let b = 0;
b = b + 1;

// console.log(s);

// function test  
function test(name){
  console.log('Hello -', name);
}
test('Ilia');

// function arrow
let test2 = name2 => console.log('Hello -', name2);
 test2('Ania');

// Array test
const cars = ['Mazda', 'Ford', 'BMW', "Audi"]
const num = [1, 1, 2, 3, 5, 6, 10,]
// push - add element
cars.push('Porshe')

cars.unshift('Reno')
// shift delete first element
cars.shift()
const lastCar = cars.pop()
// console.log(cars);

// const text = 'Hello, we learn JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);

// -------------------------------------------------------------

// findIndex 
// const people = [
//   {name: 'Ania', budget: 4500},
//   {name: "Ilia", budget: 5000},
//   {name: 'Mia', budget: 228},
//   {name: 'Lusia', budget: 1488},
// ]
// method 
// const index = people.findIndex(function(person){
//  return person.budget === 228
// })
// console.log(people[index]);

// cycle
// let findedPerson
// for (const person of people) {
//   if (person.budget === 228) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson)

// pro. cod
// const person = people.find(person => person.budget === 228)
// console.log(person);
// ----------------------------------------------------------------
// upperCase method
//  const fruit = ['apple', 'orange', 'pineapple', 'cherry'];
//  const upperCaseFruit = fruit.map(fruit => {
//    return fruit.toUpperCase()
//  })
// console.log(upperCaseFruit);
// console.log(fruit); 
// ----------------------------------------------------------------

const people = [
    {name: 'Ania', budget: 4500},
    {name: "Ilia", budget: 5000},
    {name: 'Mia', budget: 228},
    {name: 'Lusia', budget: 1488},
]
const allBudget = people
.filter(person => person.budget > 2000)
.reduce((accum, person) => {
  accum += person.budget
  return accum
}, 0)
console.log(allBudget);
