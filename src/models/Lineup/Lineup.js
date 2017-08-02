import {numberOfStarters, numberOfPlayersPerTeam} from '../../config/rules'

export const pickLineUp = roster =>  {
    var rosterOrderBySpeed = roster.sort(compareBySpeed);
    var starters = rosterOrderBySpeed.reverse().slice(0, numberOfStarters);
    var subs = rosterOrderBySpeed.slice(numberOfStarters, numberOfPlayersPerTeam);
    return {starters,subs}
}

const compareBySpeed = (playerA,playerB) =>{
  if (playerA.speed < playerB.speed)
    return -1;
  if (playerA.speed > playerB.speed)
    return 1;
  return 0;
}

