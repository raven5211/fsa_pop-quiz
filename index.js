let score = 0;
let errors = 0;

alert("Welcome to the fun fact pop quiz!");

//question 1
const q1 = `Which fun fact is true: 
\t(1) The first bird to ever use an Xbox controller was a Kea called Parau.
\t(2) By definition a snake’s body is a limb.
\t(3) Sharks are older than trees.
\t(4) The kneecap is the roundest part of your body.`;
console.log(q1);
const answer1 = Number(prompt(q1));

if (Number.isNaN(answer1)) {
  errors++;
  let errorMsg = "ERROR: please enter a number";
  console.log(errorMsg);
  alert(errorMsg);
} else if (answer1 < 1 || answer1 > 4) {
  errors++;
  let errorMsg = "ERROR: please enter a number between 1 and 4";
  console.log(errorMsg);
  alert(errorMsg);
} else {
  if (answer1 == 3) {
    score++;
    let correctMsg = "Correct: sharks are older than trees.";
    console.log(correctMsg);
    alert(correctMsg);
  } else {
    let incorrectMsg = "Incorrect: I made that shit up.";
    console.log(incorrectMsg);
    alert(incorrectMsg);
  }
}

//question 2
const q2 = `Which fun fact is true: 
\t(1) The word ‘Loanshark’ was originally, ‘Loans, hark’.
\t(2) Every member of Iron Maiden was a Quaker.
\t(3) A furlong was defined as the distance a mule can run in two minutes.
\t(4) You are taller in the morning.`;
console.log(q2);
const answer2 = Number(prompt(q2));

if (Number.isNaN(answer2)) {
  errors++;
  let errorMsg = "ERROR: please enter a number";
  console.log(errorMsg);
  alert(errorMsg);
} else if (answer2 < 1 || answer2 > 4) {
  errors++;
  let errorMsg = "ERROR: please enter a number between 1 and 4";
  console.log(errorMsg);
  alert(errorMsg);
} else {
  if (answer2 == 4) {
    score++;
    let correctMsg = "Correct: You are taller in the morning.";
    console.log(correctMsg);
    alert(correctMsg);
  } else {
    let incorrectMsg = "Incorrect: I made that shit up.";
    console.log(incorrectMsg);
    alert(incorrectMsg);
  }
}

//question 3
const q3 = `Which fun fact is true: 
\t(1) Leftover pasta has extra health benefits.
\t(2) Cat Stevens first name is Catherine.
\t(3) An adolescent owl is called a ‘novice’.
\t(4) The Boy Scouts were counted as part of the American military until 1986.`;
console.log(q3);
const answer3 = Number(prompt(q3));

if (Number.isNaN(answer3)) {
  errors++;
  let errorMsg = "ERROR: please enter a number";
  console.log(errorMsg);
  alert(errorMsg);
} else if (answer3 < 1 || answer3 > 4) {
  errors++;
  let errorMsg = "ERROR: please enter a number between 1 and 4";
  console.log(errorMsg);
  alert(errorMsg);
} else {
  if (answer3 == 1) {
    score++;
    let correctMsg = "Correct: Leftover pasta has extra health benefits.";
    console.log(correctMsg);
    alert(correctMsg);
  } else {
    let incorrectMsg = "Incorrect: I made that shit up.";
    console.log(incorrectMsg);
    alert(incorrectMsg);
  }
}

//results
let result = "";

if (errors > 0) {
  result += `You gave ${errors} invalid ansers \n`;
}

if (score == 0) {
  result += "WOW! You answered every question incorrectly! \n";
  result += "\tfun fact: you're kind of gullible";
} else if (score == 3) {
  result += "WOW! You answered every question correctly! \n";
  result += "\tIt's kinsa weird that you know all that...";
} else if (score > 1) {
  result += `You answered ${score} questions correctly! \n`;
  result += "\tpretty average tbh";
} else if (score == 1) {
  result += `You answered ${score} question correctly! \n`;
  result += "\tpretty average tbh";
}

console.log(result);
alert(result);
