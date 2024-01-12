 function vacationBookList(input){
 //current се съкращава cur, едно и също е current=cur 
     let currentBookPages = Number(input[0]);
     let pagesPerHour = Number(input[1]);
     let days = Number(input[2]);

     let totalHours = currentBookPages / pagesPerHour;
     let hoursPerDay = totalHours / days;

     console.log(hoursPerDay);
}

 vacationBookList(["212", "20", "2"]);


