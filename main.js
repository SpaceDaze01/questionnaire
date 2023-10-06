const prompt = require('prompt-sync')({ sigint: true });

const question = require('./questData.json')

const answer = require('./answerData.json')

const fs = require('fs')

const emptyResult = {
  "name": "",
  "date": new Date().toString(),
  "resultInProcent": {
    "dog": 0,
    "cat": 0,
    "bunny": 0,
    "fish": 0
  },
  "dogPoints": 0,
  "catPoints": 0,
  "bunnyPoints": 0,
  "fishPoints": 0,
}

console.log(emptyResult);


answer.unshift(emptyResult);


let running = true;

while (running) {
  console.log(`Menu
1.Do questionnaire
2.See results
3.Quit

Choose number between 1-3!
Choice - `);
  const choice = prompt().trim();
 
  
  switch (choice) {
  
    case "1": {
     
     
      console.log("What's your name? ")
      const name = prompt().trim();

      if (name.length === 0) {
        console.log(`You need to write something!`);
        break;
      } else {
        emptyResult.name = name
        console.log(`Hello '${name}'!`);
        running = false
      }
    
      
      console.log("DATA - " + question.questionnaire[0].question);
      console.log(answer);

 
      for (let index = 0; index < question.questionnaire.length; index++) {
        
        
        let run = true
        while (run) {
          const input = prompt(question.questionnaire[index].question);
          console.log(input);

          if (input === "yes") {
            let { dog, cat, bunny, fish } = question.questionnaire[index].yes
            answer[0].dogPoints += dog, answer[0].catPoints += cat, answer[0].bunnyPoints += bunny, answer[0].fishPoints += fish
            run = false
          } else if (input === "no") {
            let { dog, cat, bunny, fish } = question.questionnaire[index].no
            answer[0].dogPoints += dog, answer[0].catPoints += cat, answer[0].bunnyPoints += bunny, answer[0].fishPoints += fish
            run = false
          } else {
            console.log("You wrote something else!")
          }
        }
      }

      
      console.log("Result dog = " + emptyResult.dogPoints);
      console.log("Result cat = " + emptyResult.catPoints);
      console.log("Result bunny = " + emptyResult.bunnyPoints);
      console.log("Result fish = " + emptyResult.fishPoints);
      console.log(emptyResult)


      
      emptyResult.resultInProcent.dog = (emptyResult.dogPoints * 100) / (43);
      emptyResult.resultInProcent.cat = (emptyResult.catPoints * 100) / (31);
      emptyResult.resultInProcent.bunny = (emptyResult.bunnyPoints * 100) / (31);
      emptyResult.resultInProcent.fish = (emptyResult.fishPoints * 100) / (45);
      console.log(emptyResult)



      
      
      let totalScore = Math.max(answer[0].dogPoints, answer[0].catPoints, answer[0].bunnyPoints, answer[0].fishPoints);

      
      console.log(totalScore + " points");
      

      
      if (totalScore === answer[0].dogPoints) {
        console.log("You got dog!")
      } else if (totalScore === answer[0].catPoints) {
        console.log("You got cat!")
      } else if (totalScore === answer[0].bunnyPoints) {
        console.log("You got bunny!")
      } else if (totalScore === answer[0].fishPoints) {
        console.log("You got fish!")
      }



     
      const read = (question) => {
        try {
          const reading = JSON.stringify(question, null, 2);
          fs.readFileSync('questData.json', data);
          console.log('Succefully read file to questData.json');
        } catch (error) {
          console.error('Failed to read file:', error);
        }
      }

      console.log(read);

      
      
      try {
        answer.push(emptyResult)
        const data = JSON.stringify(answer, null, 2);
        fs.writeFileSync('./answerData.json', data);
        console.log('Successfully saved results to answerData.json');
      } catch (error) {
        console.error('Failed to save results:', error);
      }
    }
    break;
      
      
    
  
        
    case "2": {
      if (answer.length === 0) {
        console.log(`There is no results to look at!`);
      } else {
        for (let i = 0; i < answer.length; i++) {
          console.log(`${i}. ${answer[i].name}
          ${answer[i].date}
          ${"dog " + answer[i].dogPoints + " points, " + answer[i].resultInProcent.dog + " procent"}
          ${"cat " + answer[i].catPoints + " points, " + answer[i].resultInProcent.cat + " procent"}
          ${"bunny " + answer[i].bunnyPoints + " points, " + answer[i].resultInProcent.bunny + " procent"}
          ${"fish " + answer[i].fishPoints + " points, " + answer[i].resultInProcent.fish + " procent"}`);
        }
      } 
      }    
      break;   
          
        
    
    case "3": {
      console.log("You ended the program");
      running = false;
    } default:{
    
    
     
      if (choice > 3 < 0) {
      console.log();
    }
    } break;
  }
  
  
}     
      
  
  
  
  
  
  
    
  
  
  
  
     


  












