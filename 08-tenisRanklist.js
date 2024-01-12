function tenisRanklist(input) {

    let tournaments = Number(input[0]);
    let initialPoint = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < tournaments + 2; i++) {
        let result = input[i];
//Тази проверка може да се направи и със switch:
// switch(result) {
    //case 'W':
    //tournamentsWon++;
    //break;
    //case 'F':
    //pointsWon += 1200
    //break;
    //case 'SF':
    //pointsWon += 720
    //break;
//}
        if (result === 'W') {
            pointsWon += 2000;
            tournamentsWon++;
        } else if (result === 'F') {
            pointsWon += 1200;
        } else if (result === 'SF') {
            pointsWon += 720;
        }
    }
    console.log(`Final points: ${initialPoint + pointsWon}`);

    let avgPoints = pointsWon / tournaments;
    console.log(`Average points: ${Math.floor(avgPoints)}`);

    let wonPercent = (tournamentsWon / tournaments) * 100;
    console.log(`${wonPercent.toFixed(2)}%`);

}
tenisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]); 
//tenisRanklist(["4", "750", "SF", "W", "SF", "W"]); 
