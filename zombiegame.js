var headShot = true;
var totalDamage = 0;

var zombie = {
    hp:10,
    attack:2
}
var player = {
    hp:10
}

while(zombie.hp>0 && player.hp>0) {
    var hitZombie = Math.floor(Math.random() * 1.5)
    var hitsThisRound = Math.floor(Math.random()*5 + 1)
    if (hitZombie) { 
        console.log("You hit the undead fucker!");
        totalDamage += hitsThisRound;
        if (totalDamage >= 10){
            console.log("You put a bullet in it's head!");
            zombie.hp=0
        }
        else {
            zombie.hp=zombie.hp-hitsThisRound
        }
    }
    else {
        console.log("You missed!");
        var zombieHitYou = Math.floor(Math.random() * 6)
        if (zombieHitYou>=2) {
            player.hp = player.hp-zombie.attack
            if (player.hp>0) {
                console.log("zombie dick to mouth");
            }
            else {
                console.log("Ew, it ate you!")
            }
        }
    }
    console.log("zombie hp:" + zombie.hp)
    console.log("player hp:" + player.hp)
}