function oldBooks(input) {
    let searchedBook = input[0];
    let booksChecked = 0;

    let index = 1;
    let command = input[index]; //препоръчително е веднага да инкрементираме index
    index++;

    while (command !== 'No More Books') {
        let bookTitle = command;
        
        if (bookTitle === searchedBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }

        booksChecked++;

        command = input[index];
        index++; //ако тук не инкрементираме index ще стоим на една и съща книга.
    }

    if (command === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
//oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
//oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);