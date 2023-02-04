const nums = [1,2,3,4,5,6,7,8];

const slicePart = nums.slice(2, 5); //begining index to before index, dont change parent array
// console.log(slicePart);
// console.log(nums);

const splicePart = nums.splice(2, 5, 99); //begining index to count number,  changed parent array, if we give any more parameter then it inject/push to the removed element
console.log(splicePart);
console.log(nums);

const joinedElement = nums.join(" and ");
console.log(joinedElement);