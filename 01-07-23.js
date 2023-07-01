// Array Methods

let num=[1,2,3,34,4]

// ***********pop method*********

// let r = num.pop()
// console.log(num,r);

// expected answer : [1,2,3,34]4



// ***********push method***********

// let r = num.push(45)
// console.log(num,r);

// expected answer: [1,2,3,34,4,45]6


// *********** shift method************

// let r = num.shift()
// console.log(num,r);

// expected answe: [2,3,34,4]


// ************ unshift method*************

// let r = num.unshift(33)
// console.log(num,r);

// expected answer: [33,1,2,3,34,4]


// *********filter method***********

// const words =['spray', 'limit','elite','destructible'];
// const result = words.filter( words => words.length >6);
// console.log(result);

// expected answer: ['destructible']


// ***********fill method************

// question. fill with 0 from position 2 until postion 4
// const array =[1,2,3,4];
// console.log(array.fill(0,2,4));

// expected answer: [1,2,0,0]


// *********** find last index***********
// const array =[5,12,50,130,44];
// const isLargeNumber = (element) => element > 45;
// console.log(array.findLastIndex(isLargeNumber));

// expected answer: 3 which is index of 130



// ************for each************

// const array = ['a','b','c'];
// array.forEach(element => console.log(element));

// expected answer: a 
//                  b 
//                  c


// ***********concat method**********

// const array1 = ['a','b','c'];
// const array2 = ['d','e','f'];
// const array3 = [array1.concat(array2)];
// console.log(array3);


// *************map**************

// const array = [1,4,8,6,9];
// const map1 = array.map(x => x*2);
// console.log(map1);


// ********** slice***********

// const animals =['ant','bison','camel','duck','elephant'];

// console.log(animals.slice(2,4));

// expected answer: ['camel','duck']


// ********** sort************

// const months =['march','jan','feb','dec'];
// months.sort();
// console.log(months);