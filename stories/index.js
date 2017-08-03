import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import  PlayerCard  from '../src/Components/PlayerCard/PlayerCard';
import  Lineup  from '../src/Components/Lineup/Lineup';
import  Squad  from '../src/Components/Squad/Squad';
import  Owner  from '../src/Components/Owner/Owner';
import {createMockPlayer,createMockRoster} from '../src/models/_mocks_/mocks'
import {pickLineUp} from '../src/models/Lineup/Lineup'


var mockPlayer = createMockPlayer(99)
var mockRoster = createMockRoster()
var {starters, subs} = pickLineUp(mockRoster)
var PlayerCardInfo = "Shows a card displaying player name, speed, strenght and score"
var StartersInfo = "Shows a list of starters"
var SubsInfo = "Shows a list of subs"
var LineupInfo = "Shows a lineup containing both starters and subs"


storiesOf('PlayerCard', module)
    .add('Regular',withInfo(PlayerCardInfo)(() => 
        <PlayerCard player={mockPlayer}/>))

storiesOf('Squad', module)
  .add('Starter',withInfo(StartersInfo)(() => 
        <Squad starter players={starters}/>))
  .add('Subs',withInfo(SubsInfo)(() => 
        <Squad players={subs}/>))

storiesOf('Lineup', module)
  .add('Regular',withInfo(LineupInfo)(() => 
        <Lineup roster={mockRoster}/>))
