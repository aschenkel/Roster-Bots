import {numberOfStarters, numberOfPlayersPerTeam} from '../../settings/rules'

export const pickLineUp = roster =>  {
    var rosterOrderBySpeed = roster.sort(compareBySpeed);
    var starters = pickStarters(rosterOrderBySpeed.reverse());
    var subs = pickSubs(rosterOrderBySpeed);
    return {starters,subs}
}

const pickStarters = (roster) =>{
    var starters = roster.slice(0, numberOfStarters);
    return starters
}

const pickSubs = (roster) =>{
    var subs = roster.slice(numberOfStarters, numberOfPlayersPerTeam);
    return subs
}


const compareBySpeed = (playerA,playerB) =>{
  if (playerA.speed < playerB.speed)
    return -1;
  if (playerA.speed > playerB.speed)
    return 1;
  return 0;
}

