//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
const result1 = []
const result2 = []
const result3 = []
function moreThan70Room1 (score) {
  for(let i = 0; i < score.length; i++) {
    if(score[i] > 70) {
    result1.push(score[i])
    }
  }
  return result1;
}
moreThan70Room1(studentScoresRoom1)
console.log(result1)

function moreThan70Room2 (score) {
  for(let i = 0; i < score.length; i++) {
    if(score[i] > 70) {
    result2.push(score[i])
    }
  }
  return result2;
}
moreThan70Room2(studentScoresRoom2)
console.log(result2)

function moreThan70Room3 (score) {
  for(let i = 0; i < score.length; i++) {
    if(score[i] > 70) {
    result3.push(score[i])
    }
  }
  return result3;
}
moreThan70Room3(studentScoresRoom3)
console.log(result3)

function atLeastFive(operation, array) {
  // Start coding here
  if(array.length >= 5 ) {
      return true
    } else {
      return false
    }
}
// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(moreThan70Room1, result1);
let scoreRoom2Result = atLeastFive(moreThan70Room2, result2);
let scoreRoom3Result = atLeastFive(moreThan70Room3, result3);
console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)