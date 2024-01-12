function lunchBreak(input) {
    let seriesTitle = input[0]; //без  Number, тъй като на индекс 0 не е число
    let episodesDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = (1 / 8) * breakDuration;
    let restDuration = (1 / 4) * breakDuration;

    let freeTime = breakDuration - lunchDuration - restDuration;

    if (freeTime >= episodesDuration) {
        let timeLeft = freeTime - episodesDuration;
        console.log(`You have enough time to watch ${seriesTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`);
        } else {
            let timeNeeded = episodesDuration - freeTime;
            console.log(`You don't have enough time to watch ${seriesTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
        }
}

lunchBreak(["Game of Thrones", "60", "96"]);
//lunchBreak(["Teen Wolf", "48", "60"]);