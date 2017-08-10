import {maxScoreAllowed,minScoreAllowed} from '../../settings/rules'
const uuidv4 = require('uuid/v4');

export const newPlayer = (score,nameCreator = uuidv4) => {
  if(isScoreValid(score)){ 
    var halfScore = score/2
    return {
      name: nameCorrector(nameCreator()),
      speed: Math.round(halfScore),
      strength: Math.floor(halfScore),
      score
    }
  }
  else{
    return errorMessage
  }
}

const isScoreValid = score => {
    return score >= minScoreAllowed && score <= maxScoreAllowed ? true : false
}



const nameCorrector = uncorrectName =>{
  var letters =[]
  var numbers = []
  for (var i = 0; i < uncorrectName.length; i++) {
    var char = uncorrectName.charAt(i);
    if(char !== '-'){
      if(isNaN(char)){
        letters.push(char.toUpperCase())
      }else{
        numbers.push(char)
      }
    }
  } 
  letters.sort()
  numbers.sort()
  return letters.concat(numbers).join("");
}

const orderAndJoin = array => {
  array.sort().join("");
}
export const errorMessage = "Error, score not allowed"
