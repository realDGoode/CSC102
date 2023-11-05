//This is the function for the game
function playCards(){
    //This prints that the function is called to the console
    console.log("playCards function called");

    //This is the variable for the first card, it is printed to the console
    var card1 = drawCard()
    console.log("Your first card is " + card1);

    //This is the variable for the second card, it is printed to the console
    var card2 = drawCard()
    console.log("Your second card is " + card2);

    //This adds up the previous two variables and displays it as a number, it is printed to the console
    var sum = card1 + card2;
    console.log("The sum of your hand is " + sum);

    //This is the function that outputs the result from the variable "card1" to the function to the HTML page
    outputRes("card1Res", "First card is: " + card1);
    //This is the function that outputs the result from the variable "card2" to the function to the HTML page
    outputRes("card2Res", "Second card is: " + card2);
    //This is the function that outputs the result from the variable "sum" to the function to the HTML page
    outputRes("handRes", "Hand total is: " + sum);
    //This is the function that calucates the results as win, loss, or blackjack from the game and sends it to the HTML page
    if(sum == 21){
        outputRes("bustRes", "Wow, Blackjack!");
        }
    else if (sum <= 20 || sum >= 17){
        outputRes("bustRes", "You Won!");
        }
    else if (sum == 22 || sum < 17){
        outputRes("bustRes", "You lost!");
        }
}
//This function translates the results into a format that is read by HTML
function outputRes(htmlElement, theText){

    document.getElementById(htmlElement).innerHTML = theText
}

//This is the random number generator that the card variables rely on to simulate a deck of cards that is refilled and shuffled every game
function drawCard(){
    var card = 11 * Math.random();
    return Math.ceil(card);
}