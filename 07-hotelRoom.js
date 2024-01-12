function hotelRoom(input) {

    let month = input[0];
    let nightCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nightCount * 50;
            apartmentPrice = nightCount * 65;

            if (nightCount > 7 && nightCount <= 14) {
                studioPrice *= 0.95;
            } else if (nightCount > 14) {
                studioPrice *= 0.7;
            }
            break;

        case 'June':
        case 'September':
            studioPrice = nightCount * 75.2;
            apartmentPrice = nightCount * 68.7;

            if (nightCount > 14) {
                studioPrice *= 0.8;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = nightCount * 76;
            apartmentPrice = nightCount * 77;
            break;
    }

    if (nightCount > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelRoom (["May", "15"]);
//hotelRoom (["June", "14"]);
//hotelRoom (["August", "20"]);