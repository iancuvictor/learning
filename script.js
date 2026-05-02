// creating a quiz game to utilize what i've learned up until now.
let score = 0;

let questionOne = {
  question: 'How many years in a decade?',
  answer: 10
}

let questionTwo = {
  question: 'How many minutes in an hour?',
  answer: 60
}

let questionThree = {
  question: 'How many seconds in an hour?',
  answer: 3600
}

let questionFour = {
  question: 'What is 10+10?',
  answer: 20
}

let qArray = [questionOne, questionTwo, questionThree, questionFour];

function askQuestion(obj){
  let answer = prompt(`${obj.question}`, '');
  if(answer == obj['answer']){
    score++;
  } else {
    alert(`Wrong, but going to the next question anyway.`);
  }
}

for(let objects of qArray){
  askQuestion(objects);
}

if(score >= 2){
    alert(`You passed with a score of ${score}`)
} else {
  alert(`You failed with a score of ${score}`)
}