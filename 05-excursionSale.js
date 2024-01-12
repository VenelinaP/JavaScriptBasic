function touristAgency(input) {
    let seaExcursions = Number(input[0]);
    let mountainExcursions = Number(input[1]);
    let totalProfit = 0;
    let allExcursionsSold = false;

    for (let i = 2; i < input.length; i++) {
        let currentExcursion = input[i];

        if (currentExcursion === "sea" && seaExcursions > 0) {
            totalProfit += 680;
            seaExcursions--;
        } else if (currentExcursion === "mountain" && mountainExcursions > 0) {
            totalProfit += 499;
            mountainExcursions--;
        }

        if (seaExcursions === 0 && mountainExcursions === 0) {
            allExcursionsSold = true;
            break;
        }
    }

    if (allExcursionsSold) {
        console.log("Good job! Everything is sold.");
    } else {
        
    }
    console.log(`Profit: ${totalProfit} leva.`);
}
touristAgency (["2", "2","sea", "mountain", "sea", "sea", "mountain"]);
