function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenPositionSum = 0;
        let oddPositionSum = 0;

        let curNumStr = curNum.toString();
        // let curNumStr = String(curNum); може и по този начин да се конвентира число към стринг

        for (let i = 0; i < curNumStr.length; i++) {
            let digit = Number(curNumStr[i]); 

            if (i % 2 === 0) {
                evenPositionSum += digit;
            } else {
                oddPositionSum += digit;
            }
        }

        if (evenPositionSum === oddPositionSum) {
            result += curNum + ' ';
        }
    }

    console.log(result);
}
equalSumsEvenOddPosition(["100000", "100050"]);
//equalSumsEvenOddPosition(["123456", "124000"]);
//equalSumsEvenOddPosition(["299900", "300000"]);
//equalSumsEvenOddPosition(["100115", "100120"]);
