'use strict';

// Make an Event Handler

// The goal here is for them to make a simple event handler
// and use the alert() method

function alertMe() {
    alert("Hi!");
}
var button = document.getElementById('popup-alert-button');
button.addEventListener('click', alertMe);

// It would also be fine if they used an inline function express here:
//
//  button.addEventListener('click', function () { alert("Hi!"); }





// Manipulating the DOM

// The goal here is for them to learn about or use innerText or or innerHTML

function changeText() {
    document.getElementById('message-to-change').innerText = 'goodbye';
}
document.getElementById('change-hello-to-goodbye-button').addEventListener(
    'click', changeText);




// Preventing Form Submission

// The goal here is for them to remember the event.preventDefault method.
// A secondary goal is for them to attach to the form's submit method, rather
// than the button's click method--otherwise, pressing ENTER in the form field
// will submit the form and they won't catch it!

function alertMeAlso(evt) {
    evt.preventDefault();
    alert("Phew! No submit!");
}

document.getElementById('prevent-form-submission-form').addEventListener(
    'submit', alertMeAlso);




// Finding the Button

// The goal here is for them to use the right DOM method to get the items by
// class and then to index that, since it will always be a list

function alertMeThree() {
    alert("Ok, you found it!");
}

document.getElementsByClassName('tricky-to-find')[0].addEventListener(
    'click', alertMeThree);




// Adding HTML

// The goal here is for them to make a Javascript loop, build up a string, and
// manipulate the DOM.

function makeTodoList() {
    var list = "";

    for (var i = 1; i < 11; i++) {
        list = list + "<li>" + i + "</li>";
    }

    document.getElementById('empty-todo-list').innerHTML = list;
}

document.getElementById('make-todo-list').addEventListener('click', makeTodoList);



// Reversing a String

// The goal here is to make a loop based on the length of the string and work
// backwards to make the new string.

function reverseString() {
    var msg = 'Porcupines are cute';
    var newMsg = '';

    for (var i = msg.length - 1; i >= 0; i--) {
        newMsg = newMsg + msg[i];
    }

    alert(newMsg);
}

document.getElementById('reverse-string-button').addEventListener('click', reverseString);


// JQUERY



// Down with Cats!

function swapCat() {
    $("#kittenz-rule").attr('src', 'http://www.alegoo.com/images05/animals/dogs-3/019/pictures-of-dogs-16.jpg');
}

$("#kittenz-rule").on('dblclick', swapCat);





// Slowly Make a Porcupine

function showPorcupine() {
    $('#cute-porcupine-image').slideDown(2000);  // 2000ms = 2 seconds
}

function showPorcupineAfterASecond() {
    setTimeout(showPorcupine, 1000);    /// 1000ms = 1 second
}

$('#make-a-porcupine').on('click', showPorcupineAfterASecond);

// It would be very good for the students to realize, perhaps with some coaching,
// that it's a little silly to have 2 one-line functions that won't be used elsewhere,
// so this would be a good place to play with the inline function expressions:

//$('#make-a-porcupine').on('click',
//    function () {
//        setTimeout(
//            function () {
//                $('#cute-porcupine-image').slideDown(2000);
//            }, 1000
//        )
//    }
//);




// An Agreeable Form

// The goal here is for them to learn about .val() and practice .text()

function agree(evt) {
    evt.preventDefault();
    var theirFood = $('#favorite-food-input').val();
    $('#agreeable-text').text("I like " + theirFood + ", too!");
}

$('#agreeable-form').on('submit', agree);





// Number Guessing Game

function playGame() {
    var secretNumber = Math.floor(Math.random() * 99) + 1;
    var theirGuess = null;

    while (theirGuess != secretNumber) {
        theirGuess = parseInt(prompt("Guess my number"));
        if (theirGuess > secretNumber) {
            alert("You guessed too high!");
        } else if (theirGuess < secretNumber) {
            alert ("You guessed too low!");
        }
    }

    alert("You guessed it!");
}

$('#play-guessing-game').on('click', playGame);





// Number Guessing Game #2

// Define this out here so we can get to it from each of our functions
var secretNumber;

function playGame2() {
    secretNumber = Math.floor(Math.random() * 99) + 1;

    // Enable the game inputs
    $('#number-guessed').prop('disabled', false);
    $('#try-this-number').prop('disabled', false);

    // Disable the play-game button until we win
    $('#play-guessing-game-2').prop('disabled', true);
}

function makeGuess(evt) {
    evt.preventDefault();

    // This is called when they submit the form
    var theirGuess = parseInt($('#number-guessed').val());
    if (theirGuess < secretNumber) {
        $("#number-guessing-msg").text("Too low!");
    } else if (theirGuess > secretNumber) {
        $("#number-guessing-msg").text("Too high!");
    } else {
        // Yay! They got it
        $("#number-guessing-msg").text("You got it!");

        // Disable the game inputs
        $('#number-guessed').prop('disabled', true);
        $('#try-this-number').prop('disabled', true);

        // Disable the play-game button until we win
        $('#play-guessing-game-2').prop('disabled', false);

    }
}

$('#play-guessing-game-2').on('click', playGame2);
$('#guessing-game-2-form').on('submit', makeGuess);




// Five colored primes

function isPrime(x) {
    // is X prime?
    //
    // We'll use the simply way to check this -- which is to divide it
    // by all numbers less than sqrt(x) and see if it divides evenly
    // (why sqrt? think about it!)

    for (var i = Math.floor(Math.sqrt(x)); i > 1; i--) {
        if (x / i == Math.floor( x / i)) {
            return false;
        }
        // We never found a divisor, so it's not prime
    }
    return true;
}

function makePrimes() {
    var num = 2;     // find primes higher than 1
    var numFound = 0;
    while (numFound < 5) {
        if (isPrime(num)) {
            $('#prime-box-area').append(
                "<div class='prime-box' style='background-color: " +
                PRIME_COLORS[numFound] +
                "'>" +
                num +
                "</div>");
            numFound = numFound + 1;
        }
        num = num + 1;
    }
}

$('#make-prime-boxes').on('click', makePrimes);