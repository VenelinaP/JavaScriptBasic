function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let money = 0;
    let moneyGiven = 10;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            money += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            money += pricePerToy;
        }
    }

    if (money >= washerPrice) {
        let moneyLeft = money - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - money
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
    
}
cleverLily(["10", "170.00", "6"]);
//cleverLily(["21", "1570.98", "3"]);