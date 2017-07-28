import {maxScoreAllowed,minScoreAllowed} from '../../config/rules'
const uuidv4 = require('uuid/v4');

export const newPlayer = (score,nameCreator = uuidv4) => {
  if(isScoreValid(score)){ 
    var halfScore = score/2
    return {
      name:nameCreator(),
      speed: Math.round(halfScore),
      strenght: Math.floor(halfScore),
      score
    }
  }
  else{
    return errorMessage
  }
}

const isScoreValid = (score) => {
    return score > minScoreAllowed && score <= maxScoreAllowed ? true : false
}

export const errorMessage = "Error, score not allowed"
