var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Welcome Players
var fight = function() {
    window.alert("Welcome to Robot Gladiators");
}

//Multiple values in one console.log
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//Fight or Quit
var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//Fight Yes
if (promptFight === "fight" || promptFight === "FIGHT")
{
//Keep Enemyhealth Points
enemyHealth = (enemyHealth - playerAttack);
console.log(  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//Enemy Health Check
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died ")
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.")
}

//Deducting Players points
playerHealth = (playerHealth - enemyAttack);
console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//Player Health Check
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.")

} 
//Fight NO
} else if (promptFight === "skip" || promptFight === "SKIP") {

    //Confirm Skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. GoodBye!");
        playerMoney = playerMoney - 2;
    } 
    else { 
        fight();

    }
};

fight();