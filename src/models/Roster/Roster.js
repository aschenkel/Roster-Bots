import {newPlayer} from '../Player/Player'
import {maxScoreAllowed, numberOfPlayersPerTeam} from '../../settings/rules'

export const newRoster = () => {
    var players = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      players.push(newPlayer(properScore))
    }
    return players
}