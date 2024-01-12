function walking(input) {
    let totalSteps = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Going home') {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }
        
        command = input[index];
        index++
    }

    if (command === 'Going home') {
        let stepsGoingHome = Number(input[index]);
        index++ //не е задължително да се пише тук
        totalSteps += stepsGoingHome;

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsMore} steps over the goal!`);
    } else {
        let stepsNeeded = 10000 - totalSteps;
        console.log(`${stepsNeeded} more steps to reach goal.`);
    }
}
}
walking(["1000", "1500", "2000", "6500"]);
//walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
//walking(["1500", "300", "2500", "3000", "Going home","200"]);
//walking(["125", "250", "4000", "30", "2678", "4682"]);

