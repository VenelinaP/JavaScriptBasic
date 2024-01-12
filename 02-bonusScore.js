function bonusScore(input) {
    let initialScore = Number(input[0]);
    let bonus = 0; 

    if (initialScore <= 100) {
        bonus = 5;
    } else if (initialScore <= 1000) {
        bonus = 0.2 * initialScore;
    } else {
        bonus = 0.1 * initialScore;
    }

    if (initialScore % 2 === 0) {
        bonus += 1; //добавя 1 към стойносста на променливата
    } else if (initialScore % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(initialScore + bonus);
    
}
bonusScore(["20"]);