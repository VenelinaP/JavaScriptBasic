function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]);

    //тази функция я създаваме всеки пъът, когато имаме проценти! След това ползваме тази променлива във формулата!
    let annualInterestDecimal = annualInterestPercent / 100;

    let sum = depositedSum + depositPeriod * ((depositedSum * annualInterestDecimal) / 12);
    console.log(sum); 
}

depositCalculator(["200", "3", "5.7"]);