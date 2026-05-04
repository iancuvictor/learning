function sumInput(){
  let array = [];
  let finalSum = 0;
  let userInput;
  do {
    userInput = prompt('Enter numbers, and enter string when you wish to stop', '');
    array.push(userInput);
  } while (isFinite(userInput) && userInput !== null && userInput !== ''); 

  for(let numbers of array){
    if(isFinite(numbers)){
    finalSum = +finalSum + +numbers;
    }
  }
  return finalSum;
}

alert(sumInput());