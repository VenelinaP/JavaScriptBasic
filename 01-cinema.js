function cinema(input) {
    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let totalPlaces = rows * cols;
    let profit = 0;

    if (filmType === 'Premiere') {
        profit = totalPlaces * 12;
    } else if (filmType === 'Normal') {
        profit = totalPlaces * 7.50;
    } else if (filmType === 'Discount') {
        profit = totalPlaces * 5;
    }

    console.log(`${profit.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
//cinema(["Normal", "21", "13"]);
//cinema(["Discount", "12", "30"]);