import React from 'react';
import Squad from '../Squad';
import renderer from 'react-test-renderer';
import {createMockRoster} from '../../../models/_mocks_/mocks'
import {pickLineUp} from '../../../models/Lineup/Lineup'
import {numberOfStarters, numberOfPlayersPerTeam} from '../../../config/rules'


var mockRoster = createMockRoster()
var{starters,subs} = pickLineUp(mockRoster)

it('should render starter squad', () => {
    const tree = renderer.create(
        <Squad starter players={starters}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render subs squad', () => {
    const tree = renderer.create(
        <Squad players={subs}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

