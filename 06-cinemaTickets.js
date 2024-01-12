function cinemaTickets(input) {
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let movieTitle = command;

        let totalSeats = Number(input[index]);
        index++;

        let seatsTaken = 0;

        let command1 = input[index];
        index++;

        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'student') {
                studentTicket++
            } else if (ticketType === 'standard') {
                standardTicket++;
            } else if (ticketType === 'kid') {
                kidTicket++;
            }

            seatsTaken++;

            if (seatsTaken === totalSeats) {
                break;
            }

            command1 = input[index];
            index++;
        }
        let percentFull = (seatsTaken / totalSeats) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = studentTicket + standardTicket + kidTicket;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketPercent = (studentTicket / totalTickets) * 100;
    let standardTicketPercent = (standardTicket / totalTickets) * 100;
    let kidTicketPercent = (kidTicket / totalTickets) * 100;

    console.log (`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log (`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log (`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}
//cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);

