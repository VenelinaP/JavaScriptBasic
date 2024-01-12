function calculateDeliveryCost(input) {

    let weight = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let pricePerKilometer = 0;

    if (serviceType === "standard") {
        if (weight < 1) {
            pricePerKilometer = 0.03;
        } else if (weight <= 10) {
            pricePerKilometer = 0.05;
        } else if (weight <= 40) {
            pricePerKilometer = 0.1;
        } else if (weight <= 90) {
            pricePerKilometer = 0.15;
        } else {
            pricePerKilometer = 0.2;
        }
    } else if (serviceType === "express") {
        if (weight < 1) {
            pricePerKilometer = 0.03 * 1.8;
        } else if (weight <= 10) {
            pricePerKilometer = 0.05 * 1.5;
        } else if (weight <= 40) {
            pricePerKilometer = 0.1 * 1.05;
        } else if (weight <= 90) {
            pricePerKilometer = 0.15 * 1.02;
        } else {
            pricePerKilometer = 0.2 * 1.01;
        }
    }

    let deliveryCost = distance * pricePerKilometer;
    let formattedWeight = weight.toFixed(3);
    let formattedCost = deliveryCost.toFixed(2);

    console.log(`The delivery of your shipment with weight of ${formattedWeight} kg. would cost ${formattedCost} lv.`);
}
//calculateDeliveryCost (["1.5", "standard", "100"]);
calculateDeliveryCost (["87", "express", "130"]);
//calculateDeliveryCost (["20", "standard", "349"]);


