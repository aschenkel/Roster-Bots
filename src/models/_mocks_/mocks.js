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
    return 'aabbbcccdddeeeff1223444467777889'
}
export const uuidMockNameCreator = () =>{
    return 'feef1bbc24-4d4ab67-7778-89a-cd23de4c'
}

export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}


