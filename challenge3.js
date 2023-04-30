const input = require('readline-sync')

function FirstReverse(str) { 

    // code goes here
    let reverseStr = "";
    let length = str.length;
    for(let i=length-1; i>=0; i--){
      console.log(str[i]);
        reverseStr += str[i];
    }  
   console.log("reversed string " + reverseStr);
    //str = reverseStr;
    return reverseStr; 
  
  }
     
  // keep this function call here 
  let inputStr = input.question("Enter in a string to reverse");
  console.log(FirstReverse(inputStr));