//greshna zadacha

function braceletStand(input) {
    let teresaMoneyPerDay = Number(input[0]);
    let moneyEarnedPerDay = Number(input[1]);
    let teresaCosts = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalEarnings = 0;

    for (let days = 1; days <= 5; days++) {
        let dailyEarnings = teresaMoneyPerDay + Math.max(0, moneyEarnedPerDay - teresaCosts);
        totalEarnings += dailyEarnings;
    }

    let totalExpenses = 5 * teresaCosts;
    let profit = totalEarnings - totalExpenses;

    if (profit >= giftPrice) {
        console.log(`Profit: ${(profit - giftPrice).toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let insufficientMoney = (giftPrice - profit).toFixed(2);
        console.log(`Insufficient money: ${insufficientMoney} BGN.`);
    }
}
braceletStand (["2.10", "17.50", "20.20", "148.50"]);
