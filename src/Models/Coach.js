export const pickLineUps = roster =>  {
    var orderedRosterBySpeed = roster.sort(compare);
    var starters = orderedRosterBySpeed.slice(0, 10);
    var subs = orderedRosterBySpeed.slice(10, 15);
    return {starters,subs}
}

const compare = (playerA,playerB) =>{
  if (playerA.speed < playerB.speed)
    return -1;
  if (playerA.speed > playerB.speed)
    return 1;
  return 0;
}

