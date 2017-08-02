import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import  PlayerCard  from '../src/Components/PlayerCard/PlayerCard';
import  Lineup  from '../src/Components/Lineup/Lineup';
import  Squad  from '../src/Components/Squad/Squad';
import  Owner  from '../src/Components/Owner/Owner';

var player = {
  name: '91098cf2-e6ab-4d0b-8af9-6bcb4f0a9175',
  speed: 44,
  strenght: 45,
  score: 99
}
var mockSubs = [player,player,player,player,player]
var mockStarters = [...mockSubs,...mockSubs]
var mockRoster = [...mockStarters,...mockSubs]


storiesOf('PlayerCard', module)
  .add('Regular', () => <PlayerCard player={player}/>)

storiesOf('Squad', module)
  .add('Starter', () =>  <Squad starter players={mockStarters}/>)
  .add('Subs', () => <Squad players={mockSubs}/>)

storiesOf('Lineup', module)
  .add('Regular', () => <Lineup roster={mockRoster}/>)
