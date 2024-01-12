function accountBalance (input) {

    let totalSum = 0;
    let index = 0;
    let currentRow = input[index];

    while (currentRow !== 'NoMoreMoney') {
        let currentRowAsNumber = Number(currentRow);

        if (currentRowAsNumber < 0 ) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${currentRowAsNumber.toFixed(2)}`);
        totalSum += currentRowAsNumber;

        index++;
        currentRow = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
//accountBalance(["120", "45.55", "-150"]);

