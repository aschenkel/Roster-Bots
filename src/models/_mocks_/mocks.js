import {numberOfPlayersPerTeam,maxScoreAllowed, numberOfStarters} from '../../settings/rules'


export const createMockPlayer = (score) =>{
    var halfScore = score/2
    return {
        name:mockNameCreator(),
        speed: Math.round(halfScore),
        strength:Math.floor(halfScore),
        score
    }
}

export const mockNameCreator = () => {
    return '081813adc75140e6a12b04f61968607b'
}

export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}


