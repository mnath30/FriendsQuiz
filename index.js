const readlineSync= require('readline-sync');
const chalk=require('chalk');

//Function to display instructions
function displayInstructions(level,numberOfQuestions){

var display=`Level ${level}
Level ${level} has ${numberOfQuestions} questions`
console.log(chalk.yellow(display));

}

//looping through the question array and calling the display function
function loopThroughQuestionArray(arrayOfQuestions){

  for (let i=0;i<arrayOfQuestions.length;i++){
  displayQuestion(
    arrayOfQuestions[i].question,
    arrayOfQuestions[i].options,
    arrayOfQuestions[i].answer,
    arrayOfQuestions[i].answerOption);
  }
  console.log(chalk.yellow(`Your score is ${score}`));
}


//Function to display the question and take user answer
function displayQuestion(question,options,answer,answerOption){
  console.log(`${question}`);
  for (let j=0;j<options.length;j++){
    console.log(`${j+1}. ${options[j]}`);
  }
  var playerAnswer=Number(readlineSync.question(`Enter correct option number `));
  if (playerAnswer===answerOption){
    console.log (chalk.green("That's the right answer"));
    score++;
  }
  else{
    console.log(chalk.red(`Sorry the answer was ${answer}`));
  }
}





//QUESTIONS
//Questions for Level one
const question1 ={
  question:`1. The series Friends is set in which city?`,
  options:[`Los Angeles`,`New York City`,`Miami`,`Seattle`],
  answer:`new york city`,
  answerOption:2
}

const question2 ={
  question:`2. What pet did Ross own?`,
  options:[`dog named Keith`,`rabbit called Lancelot`,`monkey named Marcel`,`lizard named Alistair`],
  answer:`monkey named marcel`,
  answerOption:3

}

const question3 ={
  question:`3. What is Monica skilled at?`,
  options:[`Bricklaying`,`Cooking`,`American football`,`Singing`],
  answer:`cooking`,
  answerOption:2

}

//Questions for level two
const question4 ={
  question:`1. Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?`,
  options:[`France`,`Italy`,`England`,`Greece`],
  answer:`italy`,
  answerOption:2
}

const question5 ={
  question:`2. What’s the name of Joey’s penguin?`,
  options:[`Snowflake`,`Waddle`,`Huggsy`,`Bobber`],
  answer:`huggsy`,
  answerOption:3
}

const question6 ={
  question:`3. What song is Phoebe best known for?`,
  options:[`Smelly Cat`,`Smelly Dog`,`Smelly Rabbit`,`Smelly Worm`],
  answer:`smelly cat`,
  answerOption:1
}

//Bonus question for level three
const question7 ={
  question:`1. What job does Ross have?`,
  options:[`Paleontologist`,`Artist`,`Photographer`,`Insurance salesman`],
  answer:`paleontologist`,
  answerOption:1
}

//code for calling the questions and functions
const levelOneQuizQuestions=[question1,question2,question3];
const levelTwoQuizQuestions=[question4,question5,question6];
const bonusQuestion=[question7];

//taking user name and welcoming the user
const name=readlineSync.question('Please enter your name ');
console.log(`Welcome ${name} to Friends Quiz`);
console.log(chalk.blue(`Let's begin.
Answer all the questions correctly to move to the next level.
Just enter the correct option number.
Good Luck!!!!`));

//score of the player
let score=0;

//calling level one
displayInstructions('One',3);
loopThroughQuestionArray(levelOneQuizQuestions);

//check if eligible for level 2
if(score===3){
  console.log(chalk.green(`Congratulations on clearing the first level. Let's start the Level two.
  ----------------------------------------------`));
  
  //calling level two
  displayInstructions("Two",3);
  loopThroughQuestionArray(levelTwoQuizQuestions);
  if (score===6){
    
    console.log(chalk.green(`Great Level 2 is cleared!
    Now answer the bonus question to win the game
    ---------------------------------------------`));

    //calling final bonus level
    displayInstructions("Bonus",1);
  loopThroughQuestionArray(bonusQuestion);

  if (score===7){
    console.log(chalk.green(`You are the high scorer and you have won the game. Send me a screenshot to be on the Wall Of Fame.`));
  }
  else{
    console.log(chalk.red(`Oops you were so close to the finish line. Better luck next time.`));
    
  }


  }
  else{
    console.log(chalk.red(`Sorry you could not clear level 2. But you were great. Try harder next time.`));
   
  }


}
else{
  console.log(chalk.red(`Sorry you could not clear level one.Better luck next time.`));

}

//calling level two






