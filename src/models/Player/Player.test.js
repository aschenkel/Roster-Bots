import {newPlayer, errorMessage} from './Player'
import {maxScoreAllowed,minScoreAllowed} from '../../config/rules'
import {createMockPlayer,mockNameCreator} from '../_mocks_/mocks'


it('should create a new player correctly', () => {
    var halfScoreAllowed = maxScoreAllowed/2
    var expected= createMockPlayer(maxScoreAllowed)
    var actual = newPlayer(maxScoreAllowed, mockNameCreator)
    expect(expected).toEqual(actual)
})


it('should return error(string) due to score greater than allowed', () => {
    var expected= errorMessage
    var actual = newPlayer(maxScoreAllowed + 1, mockNameCreator)
    expect(expected).toEqual(actual)
})

it('should return error(string) due to score lower than allowed', () => {
    var expected= errorMessage
    var actual = newPlayer(minScoreAllowed - 1, mockNameCreator)
    expect(expected).toEqual(actual)
})

