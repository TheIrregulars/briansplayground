var headShot = true;
while(headShot) {
    if (hitZombie) {
        console.log("Ew, it ate you!");
    }
    else {
        console.log("You hit the undead fucker!");
        totalDamage += hitsThisRound;
        if (totalDamage >= 2){
            console.log("You put a bullet in it's head!");
        }
        else {
            console.log(hitZombie);
        }
    }
    headShot = false;
}
var hitZombie = Math.floor(Math.random() * 2)
var hitsThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0