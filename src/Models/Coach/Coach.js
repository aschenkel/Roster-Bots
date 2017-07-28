import {numberOfStarters, numberOfPlayersPerTeam} from '../../config/rules'

export const pickLineUps = roster =>  {
    var orderedRosterBySpeed = roster.sort(compare);
    var starters = orderedRosterBySpeed.slice(0, numberOfStarters);
    var subs = orderedRosterBySpeed.slice(numberOfStarters, numberOfPlayersPerTeam);
    return {starters,subs}
}

const compare = (playerA,playerB) =>{
  if (playerA.speed < playerB.speed)
    return -1;
  if (playerA.speed > playerB.speed)
    return 1;
  return 0;
}

