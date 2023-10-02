//läser användarinmatning
const prompt = require('prompt-sync')({ sigint: true });

// hämta in JSON-fil för questions och spara den i en data variabel
const question = require('./questData.json')

// hämtar answers för frågor
const answer = require('./answerData.json')
// ger oss möjligheten att skriva till filer
const fs = require('fs')


//användaren skriver in namn
answer[0].name = prompt("What's your name? ");


console.log("DATA - " + question.questionnaire[0].question);
console.log(answer);

//skriver ut alla frågor i index ordning, den kommer loopa igenom samma fråga tills ett visst villkor är uppfyllt
for (let index = 0; index < question.questionnaire.length; index++) {
  //console.log("DATA " + index + " - " + question.questionnaire[index].question);
  // frågor med score
  let running = true
  while (running) {
    const input = prompt(question.questionnaire[index].question);
    console.log(input);
    
    if (input === "yes") {
      let { dog, cat, bunny, fish } = question.questionnaire[index].yes
      answer[0].dogPoints += dog, answer[0].catPoints += cat, answer[0].bunnyPoints += bunny, answer[0].fishPoints += fish
      running = false
    } else if (input === "no") {
      let { dog, cat, bunny, fish } = question.questionnaire[index].no
      answer[0].dogPoints += dog, answer[0].catPoints += cat, answer[0].bunnyPoints += bunny, answer[0].fishPoints += fish
      running = false
    } else {
      console.log("You wrote something else!")
    }
  }
}

console.log("Hello " + answer[0].name + "!")
console.log("Result dog = " + answer[0].dogPoints);
console.log("Result cat = " + answer[0].catPoints);
console.log("Result bunny = " + answer[0].bunnyPoints);
console.log("Result fish = " + answer[0].fishPoints);
console.log(answer[0])

 // läser questData
const read = (question) => {
  try {
    const reading = JSON.stringify(question, null, 2);
    fs.readFileSync('questData.json', data);
    console.log('Succefully read file to questData.json');
  } catch (error) {
    console.error('Failed to read file:', error);
  }
};

console.log(read);

// läser answerData
const saveResults = (answer) => {
  try {
    const data = JSON.stringify(answer, null, 2);
    fs.writeFileSync('answerData.json', data);
    console.log('Successfully saved results to answerData.json');
  } catch (error) {
    console.error('Failed to save results:', error);
  }
};

console.log(saveResults);

let yes;
let no;


//datum idag
const date = new Date();
console.log(date);



//for in loop, går igenom varje egenskap och skriver ut namnet och värdet (name, date, percentage)
const user = { name: [], date: [], percentage: [] };
for (const info in user) {
  console.log(`${info}: ${user[info]}`);
}
















