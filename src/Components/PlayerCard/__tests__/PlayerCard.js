import React from 'react';
import PlayerCard from '../PlayerCard';
import renderer from 'react-test-renderer';
import {createMockPlayer} from '../../../models/_mocks_/mocks'

it('should render a player card', () => {
    var mockPlayer = createMockPlayer()
    const tree = renderer.create(
        <PlayerCard player={mockPlayer}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

