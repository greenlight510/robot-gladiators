var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//Welcome Players
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');


    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //Confirm Skip
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. GoodBye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
          }
        }

    //Keep Enemyhealth Points
    enemyHealth = (enemyHealth - playerAttack);
    console.log(  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died ")
    
    //Points Award
    playerMoney = playerMoney + 20;

    break;
} else {
  window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}
  //Deducting Players points
playerHealth = (playerHealth - enemyAttack);
console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
    // leave while() loop if player is dead
    break;
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
}
};

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
// if player is still alive, keep fighting
if (playerHealth > 0) {
  // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
  window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

  // pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];

  // reset enemyHealth before starting new fight
  enemyHealth = 50;

  // use debugger to pause script from running and check what's going on at that moment in the code
  // debugger;

  // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyName);
}
// if player isn't alive, stop the game
else {
  window.alert('You have lost your robot in battle! Game Over!');
  break;
}
}
