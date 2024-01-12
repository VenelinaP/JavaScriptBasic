
function repaiting(input) {
    let nylonQty = Number(input[0]); // Qty - съкратено quantity
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);

    let extraNylonQty = 2;
    let totalNylonQty = nylonQty + extraNylonQty;
    let nylonPrice = totalNylonQty * 1.50;

    let extraPaintQty = (10 / 100) * paintQty; // Може и 0.1 * paintQty
    let totalPaintQty = paintQty + extraPaintQty;
    let paintPrice = totalPaintQty * 14.50;

    let thinnerPrice = thinnerQty * 5;

    let totalMaterialsPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let workersPayPerHour = 0.3 * totalMaterialsPrice;
    let totalWorkersPay = workHours * workersPayPerHour;

    console.log(totalMaterialsPrice + totalWorkersPay);

}

repaiting(["10", "11", "4", "8"]);