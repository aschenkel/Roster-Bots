import React from 'react';
import PlayerName from '../PlayerName';
import renderer from 'react-test-renderer';
import {mockNameCreator} from '../../../../models/_mocks_/mocks'

it('should render a player´s name', () => {
    var mockName = mockNameCreator()
    const tree = renderer.create(
        <PlayerName name={mockName}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

