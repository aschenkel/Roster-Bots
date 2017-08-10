import {numberOfPlayersPerTeam,maxScoreAllowed, numberOfStarters} from '../../settings/rules'


export const createMockPlayer = (score) =>{
    var halfScore = score/2
    return {
        name: mockNameCreator(),
        speed: Math.round(halfScore),
        strength:Math.floor(halfScore),
        score
    }
}

export const mockNameCreator = () => {
    return 'ABBCCDDDFFF011122223446667778999'
}
export const uuidMockNameCreator = () =>{
    return '23C46012-2FBC7-42DF867-AB9D611-D99F7'
}

export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}


