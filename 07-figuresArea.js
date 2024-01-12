function area(input){
    let figureName = input[0];

    if(figureName === 'square'){
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));

    } else if(figureName === 'rectangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));

    } else if(figureName === 'circle'){
        let r = Number(input[1]);
        let area = Math.PI * r * r   //може да се ползва  Math.pow(числото, степента, на която искаме да вдигнем)
        console.log(area.toFixed(3));

    } else if(figureName === 'triangle'){
        let a = Number(input[1]);
        let hA = Number(input[2]);
        let area = a * hA / 2;
        console.log(area.toFixed(3)); 

    }

}
area(["triangle", "4.5", "20"]);

