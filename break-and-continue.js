const nums = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element > 5){
        break;
    }
    console.log(element);
}
console.log("break end");
const nums2 = [1,2,-1,3,-5,4,5,-8,6,7,8,9];
for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    if(element < 0){
        continue;
    }
    console.log(element);
    
}