const globalScopeArea = 20;

function sum (num1, num2){
    //var mood = "Happy";
    const summetion = num1 + num2 + globalScopeArea; //Local Scope
    if(summetion > 10){
        var mood = "Sad";
    }
    console.log(mood);
    return summetion;
}

const result = sum(7, 3);
console.log(number);
var number = 3;

console.log(result);