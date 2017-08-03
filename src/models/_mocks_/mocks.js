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
    return 'AAAA-0000-AAAA-0000'
}

export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}


