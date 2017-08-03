import {numberOfPlayersPerTeam,maxScoreAllowed, numberOfStarters} from '../../config/rules'


export const createMockPlayer = (score) =>{
    var halfScore = score/2
    return {
        name:mockNameCreator(),
        speed: Math.round(halfScore),
        strenght:Math.floor(halfScore),
        score
    }
}

export const mockNameCreator = () => {
    return '081813ad-c751-40e6-a12b-04f61968607b'
}

export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}


