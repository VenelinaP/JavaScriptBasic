function godzilaVsKong(input) {

    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumPricePerActor = Number(input[2]);

    let decorPrice = 0.1 * budget;
    let totalCostumPrice = actorsCount * costumPricePerActor;

    if (actorsCount > 150) {
        totalCostumPrice *= 0.9;
    }

    let totalPrice = decorPrice + totalCostumPrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }

}

godzilaVsKong(["9587.88", "222", "55.68"]);