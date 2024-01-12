function traiTheTrainers(input) {
    let judgesCount = Number(input[0]);
    
    let gradeSum = 0;
    let gradesCount = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let preseentationName = command;

        let presentationGradesSum = 0;
        let presentationGradesCount = judgesCount;

        for (let curJudge = 1; curJudge <= judgesCount; curJudge++) {
            let curGrade = Number(input[index]);
            index++;

            presentationGradesSum += curGrade;
        }

        let presentationAvgGrade = presentationGradesSum / presentationGradesCount;
        console.log(`${preseentationName} - ${presentationAvgGrade.toFixed(2)}.`);

        gradesCount++;
        gradeSum += presentationAvgGrade;

        command = input[index];
        index++;
    }
    let avgGrade = gradeSum / gradesCount;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);       

}
traiTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
//traiTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
//traiTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);


