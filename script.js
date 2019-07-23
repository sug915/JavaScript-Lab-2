const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

let attackPlayer = function(health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};

const isDead = health => {
  return health <= 0;
};

function fight() {
  let player1 = "Mitch";
  let player2 = "Adam";
  let player1health = 100;
  let player2health = 100;
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2health = attackPlayer(player2health);
      logHealth(player2, player2health);
      if (isDead(player2health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1health = attackPlayer(player1health);
      logHealth(player1, player1health);
      if (isDead(player1health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight();
