import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import  PlayerName  from '../src/Components/PlayerCard/PlayerName/PlayerName';
import  PlayerAttribute  from '../src/Components/PlayerCard/PlayerAttribute/PlayerAttribute';
import  AttributeBadge  from '../src/Components/PlayerCard/AttributeBadge/AttributeBadge';
import  PlayerCard  from '../src/Components/PlayerCard/PlayerCard';
import  Lineup  from '../src/Components/Lineup/Lineup';
import  Squad  from '../src/Components/Squad/Squad';
import  Owner  from '../src/Components/Owner/Owner';
import {createMockPlayer,createMockRoster} from '../src/models/_mocks_/mocks'
import {pickLineUp} from '../src/models/Lineup/Lineup'


var mockPlayer = createMockPlayer(99)
var mockRoster = createMockRoster()
var {starters, subs} = pickLineUp(mockRoster)
var PlayerNameInfo = "Shows a player name"
var AttributeBadgeInfo = "Shows an attribute value as a badge"
var PlayerAttributeInfo = "Shows a player attribute and its value"
var PlayerCardInfo = "Shows a card displaying player name, speed, strength and score"
var StartersInfo = "Shows a list of starters"
var SubsInfo = "Shows a list of subs"
var LineupInfo = "Shows a lineup containing both starters and subs"


storiesOf('PlayerName', module)
    .add('Regular',withInfo(PlayerNameInfo)(() => 
        <PlayerName name={mockPlayer.name}/>))

storiesOf('AttributeBadge', module)
    .add('Regular',withInfo(AttributeBadgeInfo)(() => 
        <AttributeBadge value={mockPlayer.speed}/>))

storiesOf('PlayerAttribute', module)
    .add('Speed',withInfo(PlayerAttributeInfo)(() => 
        <PlayerAttribute attributeType="speed" value={mockPlayer.speed}/>))
    .add('strength',withInfo(PlayerAttributeInfo)(() => 
        <PlayerAttribute attributeType="strength" value={mockPlayer.strength}/>))
        
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
