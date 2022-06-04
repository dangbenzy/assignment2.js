let points= 0
function getRandomNum(min,max){
    let randomNumber= Math.floor((Math.random()*max)+ min);
  return randomNumber 
    }


function guess(min, max, myGuess){
  if (myGuess === getRandomNum(min,max)){
    max++
    points++;
    result= 'Correct! You earned '+points+' point';
  }
  else{
    result='Try again'
  }
  console.log(result)
}

guess(1, 2, 1)

