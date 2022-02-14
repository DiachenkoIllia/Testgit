// dz-4 branch 

// method .fill
// как изменить все?
   let Phones = ['Apple', 'Xiaomi', 'Samsung', 'Huawei',];
    Phones.fill('Nokia', 2, 3,);
    console.log(Phones);

// method reverse
// правильно ли
  let Fruits = ['Apple', 'Orange', 'Banane'];
  console.log('fruits:',Fruits);
  let reversed = Fruits.reverse();
  console.log('reversed:', reversed);
  console.log('fruits:' , Fruits);

// 
const compact = (array) => array.filter((el) => el);
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]

   
// Добавить значение в массив в определенном порядке ['5', '1', '2', '3', '4', '6']
//  let array1 = ['1', '2' , '3' , '4'];
//  array1[4] = '5';
//  array1[5] = '6';
//  [array1[4], array1[0]] = [array1[0], array1[4]];
//  [array1[4], array1[1]] = [array1[1], array1[4]];
//  [array1[4], array1[2]] = [array1[2], array1[4]];
//  [array1[4], array1[3]] = [array1[3], array1[4]];
//  console.log(array1);

// let array2 = ['1', '2' , '3' , '4'];
// array2[0] = '5';
// array2[5] = '6';
// array2[1] = '1';
// array2[2] = '2';
// array2[3] = '3';
// array2[4] = '4';
// console.log(array2);

