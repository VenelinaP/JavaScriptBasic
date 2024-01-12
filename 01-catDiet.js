
function catDiet(input){

    let fatPercentage = Number(input[0]);
    let proteinPercentage = Number(input[1]);
    let carbsPercentage = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercentage = Number(input[4]);

    let dryWeight = totalCalories / ((100 - waterPercentage) / 100);

    let fatGrams = (fatPercentage / 100) * dryWeight / 9;
    let proteinGrams = (proteinPercentage / 100) * dryWeight / 4;
    let carbsGrams = (carbsPercentage / 100) * dryWeight / 4;

    let totalGrams = fatGrams + proteinGrams + carbsGrams;

    let calories = totalCalories / totalGrams;
    
    console.log(calories.toFixed(4));
}
catDiet(["60", "25", "15", "2500", "60"]);