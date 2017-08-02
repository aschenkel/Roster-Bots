import {pickLineUp} from './Lineup'
import {numberOfStarters, numberOfPlayersPerTeam,maxScoreAllowed} from '../../config/rules'
import {createMockPlayer} from '../Player/Player.test'

it('should pick starters correctly', () => {
    var mockRoster = createMockRoster()
    var {starters} = pickLineUp(mockRoster)
    var expectedStarters= mockRoster.slice(0, numberOfStarters);
    expect(expectedStarters).toEqual(starters)
})


export const createMockRoster = () =>{
    var mockPlayers = []
    for (var i = 0; i < numberOfPlayersPerTeam; i++) {
      var properScore = maxScoreAllowed - i;
      mockPlayers.push(createMockPlayer(properScore))
    }
    return mockPlayers
}
