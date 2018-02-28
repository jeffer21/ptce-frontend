/**
 * Created by AlanJoseph on 2/21/2018.
 */
const myQuestions = [
    {
        page: 1,
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
        page: 1,
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
        page: 1,
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
        page: 2,
        questionType: "video",
        dataLink: "https://www.youtube.com/embed/V2hlQkVJZhE"
    },
    {
        page: 3,
        questionType: "info",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio elit, congue quis leo sed, sodales pharetra leo. Maecenas commodo eu mi vel vehicula. Praesent lacinia ipsum odio. Donec quis hendrerit dolor. Vivamus quam nisl, dictum nec nulla quis, facilisis tempus eros. Quisque velit nulla, mattis sollicitudin velit at, varius viverra lorem. Nulla facilisi. Mauris interdum venenatis ligula et fringilla. Phasellus efficitur purus risus, faucibus vulputate odio rutrum et. Maecenas at placerat est. Fusce felis metus, imperdiet nec massa sagittis, viverra placerat orci. Pellentesque pellentesque tincidunt turpis, vel dictum nisi condimentum ac. Nunc egestas ante nunc, ac vulputate leo venenatis et. Etiam ut nisi pretium, vehicula erat vitae, aliquet est. Vestibulum rutrum suscipit fermentum."
    }

];

var currentQuizPage = 1;

function quiz() {
    //document.getElementById("quiz-start").style.display = "none";
    var countP1 = 0;
    var countP2 = 0;
    var countP3 = 0;
    var whereisvideo;
    var whatislastpage;

    for(var lp = 0; lp < myQuestions.length;lp++) {
        if(myQuestions[lp].page == 3) {
            whatislastpage = 3;
        }
    }

    for(var x = 0; x < myQuestions.length; x++) {
        console.log("This is the question type: " + myQuestions[x].questionType + " and this is the number in the array: " + x);
        if(myQuestions[x].page == 1) {
            countP1 += 1;
        } else if(myQuestions[x].page == 2) {
            countP2 += 1;
            if (myQuestions[x].questionType == "video") {
                whereisvideo = x;

                console.log('This is video number: ' + whereisvideo);
            }
        } else if(myQuestions[x].page == 3) {
            countP3 += 1;
        }
        console.log("This is the amount of questions on page 1: " + countP1);

        if(currentQuizPage == 1) {
            for (var y = 0; y <= countP1; y++) {
                document.getElementById("info-container").style.visibility = "hidden";
                document.getElementById("video-container").style.visibility = "hidden";

                var y = myQuestions[x].question.toString();
                document.getElementById("question-container").innerHTML += '<div><p>' + y + '</p>' +
                    '<form><input type="radio" name="question' + x + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question' + x + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question' + x + '">' +
                    myQuestions[x].answers.c + '<br>' + '</form>' +
                    '</div>';
            }
        } else if (currentQuizPage == 2) {
            //STILL NEEDS WORK AS OF 2/23/2018
            document.getElementById("info-container").style.display= "none";
            document.getElementById("question-container").style.display= "none";
            document.getElementById("video-container").style.visibility = "visible";

            document.getElementById("video-container").innerHTML += '<div> <iframe width="100%" height="500px" src="' + myQuestions[3].dataLink + '"></iframe> </div><br>';
            break;

        } else if (currentQuizPage == 3) {
            document.getElementById("info-container").style.display = "block";
            document.getElementById("info-container").style.visibility = "visible";
            document.getElementById("question-container").style.display= "none";
            document.getElementById("video-container").style.display= "none";

            for(var z = 0; z < whereisvideo; z++) {
                document.getElementById("info-container").innerHTML += '<div> <p>' + myQuestions[4].data + '</p></div> <br>';
            }

            if(whatislastpage == currentQuizPage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('landing-Submit').style.visibility = 'visible';
                document.getElementById('landing-Submit').style.float = 'right';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('Next').style.display = 'none';
            }
        }

        //if (myQuestions[x].questionType == "question") {
        //    document.getElementById("info-container").style.display = "none";
        //    document.getElementById("video-container").style.display = "none";
        //
        //    var y = myQuestions[x].question.toString();
        //    document.getElementById("question-container").innerHTML = '<div><p>' + y + '</p><br>' +
        //        '<form><input type="radio">' + myQuestions[x].answers.a + '<br><input type="radio">' + myQuestions[x].answers.b + '<br><input type="radio">' +
        //         myQuestions[x].answers.c + '<br><input type="radio">' + myQuestions[x].answers.d + '</form>' +
        //        '</div>';
        //}
    }
}

function landing_next() {
    var chosen =[];
    currentQuizPage += 1;
    quiz();

}

function activityStart () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById('Next').style.visibility = 'visible';
    quiz();
}

function activityEnd () {
    window.location.replace("results.html");

    setTimeout(function(){
        window.location.replace('index.html');
    }, 3000);
}

