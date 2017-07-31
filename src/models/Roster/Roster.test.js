import {newRoster} from './Roster'
import {numberOfPlayersPerTeam} from '../../config/rules'

it('should create a new roster with the proper amount of players', () => {
    var expected = numberOfPlayersPerTeam
    var actual = (newRoster()).length
    expect(expected).toEqual(actual)
})

it('should create a new roster correctly (each player should have different name and score)', () => {
    var players = newRoster()
    var validRoster = true;
    var i = 0;
    while (validRoster && i < players.length) {
        var playerA = players[i];
        var j = i + 1
        while (validRoster && j < players.length) {
            var playerB = players[j]
            if(playerA.name === playerB.name || playerA.score === playerB.score){
               validRoster = false
            }
            j++
        }
        i++
    }
    expect(validRoster).toEqual(true)
})




