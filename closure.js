function counter(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

const result = counter();
const result2 = counter();

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result());
console.log(result2());
