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
