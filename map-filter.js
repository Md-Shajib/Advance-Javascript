const number = [3,4,5,6,7,8];

// const output = [];
// for(let i=0; i<number.length; i++){
//     const element = number[i];
//     const result = element * element; 
//     output.push(result);
// }

// number.map(function(element, index, array){
//     console.log(element, index, array);
// });

// const result = number.map(function(element){
//     return element * element;
// });

const result = number.map(x => x * x);
const result2 = number.filter(x => x < 6);
const result3 = number.find(x => x == 7);

console.log(result3);