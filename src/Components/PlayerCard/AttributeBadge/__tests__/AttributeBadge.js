import React from 'react';
import AttributeBadge from '../AttributeBadge';
import renderer from 'react-test-renderer';

it('should render a player´s attribute (speed)', () => {
    const tree = renderer.create(
        <AttributeBadge value={44}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});


