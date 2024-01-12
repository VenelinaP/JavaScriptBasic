function graduation (input) {

    let name = input[0];
    let grade = 1;
    let sumGrades = 0;

    let currentGrade = Number(input[grade]);

    let excluded = 0;

    while(grade <= 12) {

        if(currentGrade < 4){
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }

        sumGrades += currentGrade;
        grade++;
        currentGrade = Number(input[grade]);
    }

    let avrGrade = sumGrades / 12;

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
    }

}
//graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "5.55", "5", "6", "6", "5.43", "5"]);
//не работи правилно с Gosho!
graduation(["Mimi", 
                 "5",
                 "6",
                 "5",
                 "6",
                 "5",
                 "6",
                 "6",
                 "2",
                 "3"]);
