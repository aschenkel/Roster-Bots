import React from 'react';
import PlayerAttribute, {attributes} from '../PlayerAttribute';
import renderer from 'react-test-renderer';

it('should render a player´s attribute (speed)', () => {
    const tree = renderer.create(
        <PlayerAttribute attributeType={attributes.speed} attributeValue={44}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render a player´s attribute (strenght)', () => {
    const tree = renderer.create(
        <PlayerAttribute attributeType={attributes.strenght} attributeValue={44}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

