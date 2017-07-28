import {maxScoreAllowed,minScoreAllowed} from '../../config/rules'
const uuidv4 = require('uuid/v4');

export const newPlayer = (score,nameCreator = uuidv4) => {
  if(scoreIsValid(score)){ 
    var halfScore = score/2
    var speed = Math.round(halfScore)
    var strenght = Math.floor(halfScore)
    var name = nameCreator();
    return {
      name,
      speed,
      strenght,
      score
    }
  }
  else{
    return errorMessage
  }
}

const scoreIsValid = (score) => {
    return score > minScoreAllowed && score <= maxScoreAllowed ? true : false
}

export const errorMessage = "Error, score not allowed"
