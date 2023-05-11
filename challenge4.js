function LongestWord(sen) { 

  // code goes here  
  let newStr = strWithoutPunctuation(sen);
  let myArray = newStr.split(" ");
  //console.log(myArray);
  let length = myArray.length;
  //console.log(length);
  let bigWord = " ";
  for(let i=0; i<length; i++){
    //console.log(myArray[i].length);
    if(bigWord.length < myArray[i].length){
      bigWord = myArray[i];
      //console.log(bigWord);
    }
  }
  return bigWord; 

}

// function splitString (str){
//   return str.split(" ");
// }

function strWithoutPunctuation(string){
  let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  return string
    .split('')
    .filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    })
    .join('');
}
   
// keep this function call here 
console.log(LongestWord(readline()));