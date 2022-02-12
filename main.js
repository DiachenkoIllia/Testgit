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

   

 

