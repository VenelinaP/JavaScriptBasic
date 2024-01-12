// function maxNumber(input) {

//     let inputElement = input[0];
//     let index = 1;
//     let max = Number.MIN_SAFE_INTEGER;

//     while (inputElement !== 'Stop') {

//         let currentNumber = Number(inputElement);

//         if (currentNumber > max) {
//             max = currentNumber;
//         }
//         inputElement = input[index];
//         index++;
//     }
//     console.log(max);

// }
// maxNumber(["100", "99", "80", "70", "Stop"]);
// maxNumber(["-10", "20", "-30", "Stop"]);

//new way-ne sme uchili i ne se polzva mnogo 

function maxNumbers(input) {
    input.pop(); //маха последния елемент
    console.log(Math.max(...input.map(Number)));

}
maxNumbers(["100", "99", "80", "70", "Stop"]);
