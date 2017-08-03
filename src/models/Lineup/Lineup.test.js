import {pickLineUp} from './Lineup'
import {numberOfStarters,maxScoreAllowed} from '../../config/rules'
import {createMockPlayer,createMockRoster} from '../_mocks_/mocks'

it('should pick starters correctly', () => {
    var mockRoster = createMockRoster()
    var {starters} = pickLineUp(mockRoster)
    var expectedStarters= mockRoster.slice(0, numberOfStarters);
    expect(expectedStarters).toEqual(starters)
})


