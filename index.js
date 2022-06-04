let groupA= ["Mike","Ola", "Femi", "Prince", "Nnamdi"]
let groupB= ["Adesewa", "Adaeze", "Erica", "Titilope"]

let places= ["Nairobi", "Miami", "Lagos", "Bermuda"]




function getRandomNum(a){
    let randomNumber= Math.floor(Math.random()*a)
    return randomNumber
    }
function searchRandom(count, arr){
  let answer = [], counter = 0;
 
  while(counter < count){
    let rand = arr[Math.floor(Math.random() * arr.length)];
    if(!answer.some(an => an === rand)){
      answer.push(rand);
      counter++;
    }
  }
  
  return answer;
}


groupB[getRandomNum(groupB.length)]
places[getRandomNum(places.length)]

for(i=0; i<5; i++){
  
  console.log(searchRandom(5,groupA)[i]+" and "+groupB[getRandomNum(groupB.length)]+" will be going on a dinner date at "+places[getRandomNum(places.length)])

              }
