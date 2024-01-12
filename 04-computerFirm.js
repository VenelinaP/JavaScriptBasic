function computerSales(input) {
    let numberOfComputers = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= numberOfComputers; i++) {
        let currentData = Number(input[i]);
        let rating = currentData % 10;
        let sales = Math.floor(currentData / 10);

        if (rating >= 2 && rating <= 6) { // Проверка за валиден рейтинг
            totalSales += sales;
            totalRating += rating * sales;
        }
    }

    let averageRating = totalRating / totalSales;

    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}

//computerSales (["3", "103", "103", "103"]);
computerSales (["5", "122", "156", "202", "214", "185"]);

