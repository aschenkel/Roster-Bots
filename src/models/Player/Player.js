import {maxScoreAllowed,minScoreAllowed} from '../../settings/rules'
const uuidv4 = require('uuid/v4');

export const newPlayer = (score,nameCreator = uuidv4) => {
  if(isScoreValid(score)){ 
    var halfScore = score/2
    return {
      name: removeDashes(nameCreator()),
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

const removeDashes = dashedName => {
  let undashedName = dashedName.replace(/-/g, '');
  return undashedName
}
export const errorMessage = "Error, score not allowed"
