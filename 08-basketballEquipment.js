function basketballEquipment (input){
let annualFee = Number(input[0]);

let sneakersPrice = annualFee - (0.4 * annualFee);
let outfitPrice = sneakersPrice - (0.2 * sneakersPrice);
let ballPrice = (1 / 4) * outfitPrice;
let accessoriesPrice = (1 / 5) * ballPrice;

let totalPrice = annualFee + sneakersPrice + ballPrice + outfitPrice + accessoriesPrice;
console.log(totalPrice);
}

basketballEquipment(["365"]);