function minMax(numArray){
    let length = numArray.length;
    let min = numArray[0];
    let max = numArray[length-1];
    for(let i=0; i< length; i++){
        if(numArray[i]< min){
            min = numArray[i];
        }
        if(numArray[i]>max){
            max = numArray[i]
        }
    }
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));