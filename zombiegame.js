var headShot = true;
var totalDamage = 0;

var zombie = {
    hp:10,
    attack:2
}

while(zombie.hp>0) {
    var hitZombie = Math.floor(Math.random() * 2)
    var hitsThisRound = Math.floor(Math.random()*5 + 1)
    if (hitZombie) { 
        console.log("You hit the undead fucker!");
        totalDamage += hitsThisRound;
        if (totalDamage >= 2){
            console.log("You put a bullet in it's head!");
            zombie.hp=0
        }
        else {
            zombie.hp=zombie.hp-hitsThisRound
            console.log(hitZombie);
        }
    }
    else {
        console.log("You missed!");
        var zombieHitYou = Math.floor(Math.random() * 5)
        if (zombieHitYou>=4) {
            console.log("Ew, it ate you!")
        }
    }
    console.log("zombie hp:" + zombie.hp)
}