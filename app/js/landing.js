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
    },
    {
        page: 4,
        questionType: "video",
        dataLink: "https://www.youtube.com/embed/e3Ze62AL9r0"
    }

];

var currentQuizPage = 1;


function quiz() {
    //document.getElementById("quiz-start").style.display = "none";
    var countP1 = 0;
    var whatislastpage = myQuestions[5].page;
    var whatisfirstpage = myQuestions[0].page;


    for(var x = 0; x < myQuestions.length; x++) {
        //console.log("This is the question type: " + myQuestions[x].questionType + " and this is the number in the array: " + x);
        if(myQuestions[x].page == 1) {
            countP1 += 1;
        }

        if(currentQuizPage == 1) {
            if(myQuestions[x].page == currentQuizPage) {
                if (myQuestions[x].questionType == 'question') {
                    for (var y = 0; y <= countP1; y++) {
                        document.getElementById("question-container").style.display= "block";
                        document.getElementById("info-container").style.visibility = "hidden";
                        document.getElementById("video-container").style.visibility = "hidden";

                        var y = myQuestions[x].question.toString();
                        document.getElementById("question-container").innerHTML += '<div><p>' + y + '</p>' +
                            '<form><input type="radio" name="question' + x + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question' + x + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question' + x + '">' +
                            myQuestions[x].answers.c + '<br>' + '</form>' +
                            '</div>';
                    }
                } else {
                    continue;
                }
            }

            if(whatisfirstpage == currentQuizPage) {
                document.getElementById('Previous').style.visibility = 'hidden';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }
        } else if (currentQuizPage == 2) {
            //STILL NEEDS WORK AS OF 2/23/2018
            document.getElementById("info-container").style.display= "none";
            document.getElementById("question-container").style.display= "none";
            document.getElementById("video-container").style.visibility = "visible";

            if(currentQuizPage != whatislastpage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }

            document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[3].dataLink + '"></iframe> </div><br>';

        } else if (currentQuizPage == 3) {
            document.getElementById("info-container").style.display = "block";
            document.getElementById("info-container").style.visibility = "visible";
            document.getElementById("question-container").style.display= "none";
            document.getElementById("video-container").style.display= "none";


            document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[4].data + '</p></div> <br>';

            if(currentQuizPage != whatislastpage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }
        } else if (currentQuizPage == 4) {
            if(myQuestions[x].page == currentQuizPage) {
                document.getElementById("info-container").style.display= "none";
                document.getElementById("question-container").style.display= "none";
                document.getElementById("video-container").style.visibility = "visible";
                document.getElementById("video-container").style.display = "block";

                document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[5].dataLink + '"></iframe> </div><br>';
                break;
            }

            if(whatislastpage == currentQuizPage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('landing-Submit').style.visibility = 'visible';
                document.getElementById('landing-Submit').style.float = 'right';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('Next').style.display = 'none';
            }
        }
    }
}

function landing_next() {
    var chosen =[];
    currentQuizPage += 1;
    console.log("The current page number is: " + currentQuizPage);
    quiz();
}

function landing_previous() {
    var chosen =[];
    currentQuizPage -= 1;
    console.log("The current page number is: " + currentQuizPage);
    quiz();
}

function activityStart () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById('Next').style.visibility = 'visible';
    console.log("The current page number is: " + currentQuizPage);
    quiz();
}

function activityEnd () {
    window.location.replace("results.html");
}

