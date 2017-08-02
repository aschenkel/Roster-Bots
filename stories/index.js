import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import  PlayerCard  from '../src/Components/PlayerCard/PlayerCard';

var player = {
  name: '91098cf2-e6ab-4d0b-8af9-6bcb4f0a9175',
  speed: 44,
  strenght: 45,
  score: 99
}

storiesOf('PlayerCard', module)
  .add('Regular', () => <PlayerCard player={player}/>)
