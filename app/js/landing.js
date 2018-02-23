/**
 * Created by AlanJoseph on 2/21/2018.
 */
const myQuestions = [
    {
        questionType: "question",
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously"
        },
        correctAnswer: "c"
    },
    {
        questionType: "question",
        question: "What is the best site ever created?",
        answers: {
            a: "SitePoint",
            b: "CrunchyRoll",
            c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
    },
    {
        questionType: "question",
        question: "Where is Waldo really?",
        answers: {
            a: "Antarctica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
    },
    {
        questionType: "video",
        videolink: "https://vimeo.com/99647025"
    },
    {
        questionType: "info",
        data: "LOREM IPSUM!"
    }

];

function quiz() {
    document.getElementById("quiz-start").style.display = "none";

    for(var x = 0; x < myQuestions.length; x++) {
        console.log("This is the question type: " + myQuestions[x].questionType + " and this is the number in the array: " + x);

        if (myQuestions[x].questionType == "question") {
            document.getElementById("info-container").style.display = "none";
            document.getElementById("video-container").style.display = "none";

            var y = myQuestions[x].question.toString();
            document.getElementById("question-container").innerHTML = '<div><p>' + y + '</p><br>' +
                '<form><input type="radio">' + myQuestions[x].answers.a + '<br><input type="radio">' + myQuestions[x].answers.b + '<br><input type="radio">' +
                 myQuestions[x].answers.c + '<br><input type="radio">' + myQuestions[x].answers.d + '</form>' +
                '</div>';
        }
    }
}

function next() {
    var chosen =[]; Test
}

//Modal before quiz
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//// When the user clicks on <span> (x), close the modal
//span.onClick = function() {
//    modal.style.display = "none";
//};
//
//// When the user clicks anywhere outside of the modal, close it
//window.onClick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//};