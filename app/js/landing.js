/**
 * Created by AlanJoseph on 2/21/2018.
 */
var myQuestions = [
    {
        page: 0,
        questionType: "question",
        question: "Who is your employer?",
        answers: {
            a: "MJH Associates",
            b: "Google",
            c: "Onclive"
        }
    },
    {
        page: 0,
        questionType: "question-fill",
        question: "What is your zip code?"
    },
    {
        page: 1,
        questionType: "question",
        question: "Who is the strongest?",
        answers: {
            a: "A. Superman",
            b: "B. The Terminator",
            c: "C. Waluigi, obviously"
        },
        correctAnswer: "c"
    },
    {
        page: 1,
        questionType: "question",
        question: "What is the best site ever created?",
        answers: {
            a: "A. SitePoint",
            b: "B. CrunchyRoll",
            c: "C. Trick question; they're both the best"
        },
        correctAnswer: "c"
    },
    {
        page: 1,
        questionType: "question",
        question: "Where is Waldo really?",
        answers: {
            a: "A. Antarctica",
            b: "B. Exploring the Pacific Ocean",
            c: "C. Sitting in a tree",
            d: "D. Minding his own business, so stop asking"
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

var finalexam = [
    {
        page: 0,
        questionType: "question",
        question: "Who is your employer?",
        answers: {
            a: "MJH Associates",
            b: "Google",
            c: "Onclive"
        }
    },
    {
        page: 0,
        questionType: "question-fill",
        question: "What is your zip code?"
    },
    {
        page: 1,
        questionType: "question",
        question: "Who is the best digimon?",
        answers: {
            a: "Agumon",
            b: "Angewoman",
            c: "Black WarGreyMon"
        },
        correctAnswer: "c"
    },
    {
        page: 1,
        questionType: "question",
        question: "What is the best video games series?",
        answers: {
            a: "Final Fantasy",
            b: "Megaman",
            c: "Spyro"
        },
        correctAnswer: "a"
    },
    {
        page: 1,
        questionType: "question",
        question: "Where is the paradise of Otakus?",
        answers: {
            a: "Tokyo",
            b: "Chiba",
            c: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        page: 2,
        questionType: "video",
        dataLink: "https://www.youtube.com/embed/ib_1ATfr8wM"
    },
    {
        page: 3,
        questionType: "info",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio elit, congue quis leo sed, sodales pharetra leo. Maecenas commodo eu mi vel vehicula. Praesent lacinia ipsum odio. Donec quis hendrerit dolor. Vivamus quam nisl, dictum nec nulla quis, facilisis tempus eros. Quisque velit nulla, mattis sollicitudin velit at, varius viverra lorem. Nulla facilisi. Mauris interdum venenatis ligula et fringilla. Phasellus efficitur purus risus, faucibus vulputate odio rutrum et. Maecenas at placerat est. Fusce felis metus, imperdiet nec massa sagittis, viverra placerat orci. Pellentesque pellentesque tincidunt turpis, vel dictum nisi condimentum ac. Nunc egestas ante nunc, ac vulputate leo venenatis et. Etiam ut nisi pretium, vehicula erat vitae, aliquet est. Vestibulum rutrum suscipit fermentum."
    },
    {
        page: 4,
        questionType: "video",
        dataLink: "https://www.youtube.com/embed/glXgSSOKlls"
    }

];

var currentQuizPage = 0;

var qCount = 0;
for(var counting =0; counting < myQuestions.length; counting++) {
    if (myQuestions[counting].questionType == "question") {
        qCount+= 1;
        console.log('This is question count: ' + qCount);
    }
}

var isFinalExam = false;

function quiz2 () {

    if(isFinalExam == true) {
        myQuestions = finalexam;
        console.log('FINAL EXAM TIME!');
    } else {
        myQuestions = myQuestions;
        console.log('This is url from previous: ' + document.referrer);
    }

    var lastpage = myQuestions[7].page;
    var firstpage = myQuestions[0].page;

    for(var x = 0; x < myQuestions.length; x++) {

        if(currentQuizPage == 0) {
            if (myQuestions[x].page == currentQuizPage) {
                if(myQuestions[x].questionType == "question") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    var zy = myQuestions[x].question.toString();
                    document.getElementById("question-container").innerHTML += '<div class="question"><h2>Question</h2><h3>' + zy + '</h3>' +
                        '<form id="question-form"><input id="'+ myQuestions[x].answers.a +'" type="radio" name="question" class="activity-question" value="'+ myQuestions[x].answers.a + '"><label for="' + myQuestions[x].answers.a + '">'+ myQuestions[x].answers.a + '</label><br><input id="'+ myQuestions[x].answers.b +'" type="radio" name="question" class="activity-question" value="'+ myQuestions[x].answers.b + '"><label for="' + myQuestions[x].answers.b + '">'+ myQuestions[x].answers.b + '</label><br><input id="'+ myQuestions[x].answers.c +'" type="radio" name="question" class="activity-question" value="'+ myQuestions[x].answers.c + '"><label for="' + myQuestions[x].answers.c + '">'+ myQuestions[x].answers.c + '</label><br></form>' +
                        '</div>';

                } else if(myQuestions[x].questionType == "question-fill") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    var zy = myQuestions[x].question.toString();
                    document.getElementById("question-container").innerHTML += '<div><p>' + zy + '</p>' +
                        '<form id="question-form"><input type="number" name="zipcode" ><br> </form>' +
                        '</div>';

                } else if (myQuestions[x].questionType == "video") {
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "block";

                    document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[x].dataLink + '"></iframe> </div><br>';


                } else if(myQuestions[x].questionType == "info") {
                    document.getElementById("info-container").style.display = "block";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[x].data + '</p></div> <br>';

                }
            }

            progressCheck();

            if(firstpage == currentQuizPage) {
                document.getElementById('Previous').style.visibility = 'hidden';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }


        } else if(currentQuizPage == 1) {
            if (myQuestions[x].page == currentQuizPage) {
                if(myQuestions[x].questionType == "question") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    var zy = myQuestions[x].question.toString();
                    document.getElementById("question-container").innerHTML += '<div><p>' + zy + '</p>' +
                        '<form id="question-form"><input type="radio" name="question" value="'+ myQuestions[x].answers.a + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question" value="'+ myQuestions[x].answers.b + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question" value="'+ myQuestions[x].answers.c + '">' +
                        myQuestions[x].answers.c + '<br>' + '</form>' +
                        '</div>';

                } else if (myQuestions[x].questionType == "video") {
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "block";

                    document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[x].dataLink + '"></iframe> </div><br>';


                } else if(myQuestions[x].questionType == "info") {
                    document.getElementById("info-container").style.display = "block";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[x].data + '</p></div> <br>';

                }
            }

            progressCheck();

            if(currentQuizPage != lastpage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }


        } else if(currentQuizPage == 2) {
            if (myQuestions[x].page == currentQuizPage) {
                if(myQuestions[x].questionType == "question") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    for(var qIter =0; qIter < qCount; qIter++) {
                        var y = myQuestions[x].question.toString();
                        document.getElementById("question-container").innerHTML += '<div><p>' + y + '</p>' +
                            '<form><input type="radio" name="question' + x + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question' + x + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question' + x + '">' +
                            myQuestions[x].answers.c + '<br>' + '</form>' +
                            '</div>';
                    }

                } else if (myQuestions[x].questionType == "video") {
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "block";

                    document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[x].dataLink + '"></iframe> </div><br>';


                } else if(myQuestions[x].questionType == "info") {
                    document.getElementById("info-container").style.display = "block";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[x].data + '</p></div> <br>';

                }
            }

            progressCheck();

            if(currentQuizPage != lastpage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }
        } else if(currentQuizPage == 3) {
            if (myQuestions[x].page == currentQuizPage) {
                if(myQuestions[x].questionType == "question") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    for(var qIter =0; qIter < qCount; qIter++) {
                        var y = myQuestions[x].question.toString();
                        document.getElementById("question-container").innerHTML += '<div><p>' + y + '</p>' +
                            '<form><input type="radio" name="question' + x + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question' + x + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question' + x + '">' +
                            myQuestions[x].answers.c + '<br>' + '</form>' +
                            '</div>';
                    }

                } else if (myQuestions[x].questionType == "video") {
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "block";

                    document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[x].dataLink + '"></iframe> </div><br>';


                } else if(myQuestions[x].questionType == "info") {
                    document.getElementById("info-container").style.display = "block";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[x].data + '</p></div> <br>';

                }
            }

            progressCheck();

            if(currentQuizPage != lastpage) {
                document.getElementById('Previous').style.visibility = 'visible';
                document.getElementById('Previous').style.float = 'left';
                document.getElementById('landing-Submit').style.visibility = 'hidden';
                document.getElementById('Next').style.float = 'right';
                document.getElementById('Next').style.display = 'block';
            }
        } else if(currentQuizPage == 4) {
            if (myQuestions[x].page == currentQuizPage) {
                if(myQuestions[x].questionType == "question") {
                    document.getElementById("question-container").style.display = "block";
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    for(var qIter =0; qIter < qCount; qIter++) {
                        var y = myQuestions[x].question.toString();
                        document.getElementById("question-container").innerHTML += '<div><p>' + y + '</p>' +
                            '<form><input type="radio" name="question' + x + '">' + myQuestions[x].answers.a + '<br><input type="radio" name="question' + x + '">' + myQuestions[x].answers.b + '<br><input type="radio" name="question' + x + '">' +
                            myQuestions[x].answers.c + '<br>' + '</form>' +
                            '</div>';
                    }

                } else if (myQuestions[x].questionType == "video") {
                    document.getElementById("info-container").style.display = "none";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "block";

                    document.getElementById("video-container").innerHTML = '<div> <iframe width="100%" height="500px" src="' + myQuestions[x].dataLink + '"></iframe> </div><br>';


                } else if(myQuestions[x].questionType == "info") {
                    document.getElementById("info-container").style.display = "block";
                    document.getElementById("question-container").style.display = "none";
                    document.getElementById("video-container").style.display = "none";

                    document.getElementById("info-container").innerHTML = '<div> <p>' + myQuestions[x].data + '</p></div> <br>';

                }
            }

            progressCheck();

            if(lastpage == currentQuizPage) {
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
    //var chosen = activityQuestions(document.getElementById('question-form'), 'question');
    //console.log('This is what was chosen: ' + chosen);
    activityQuestions();
    currentQuizPage += 1;
    console.log("The current page number is: " + currentQuizPage);
    document.getElementById("question-container").innerHTML = '';
    quiz2();
}

function landing_previous() {
    //var chosen =[];
    currentQuizPage -= 1;
    console.log("The current page number is: " + currentQuizPage);
    document.getElementById("question-container").innerHTML = '';
    quiz2();
    setActivityQuestions();
}

function activityStart () {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("global-nav").classList.remove("blur");
    document.getElementById("activity-page").classList.remove("blur");
    document.getElementById('Next').style.visibility = 'visible';
    document.getElementById('myProgress').style.visibility = 'visible';
    console.log("The current page number is: " + currentQuizPage);

    if (document.referrer == 'http://localhost:8080/results.html') {
        isFinalExam = true;
    } else {
        isFinalExam = false;
    }

    quiz2();
}

function activityEnd () {
    window.location.replace("results.html");
}

var arr = [];

function activityQuestions () {
    $('input[type="number"][name="zipcode"]').each(function(){
        arr.push($(this).val());  //push values in array
    });
    $('input[type="radio"][name="question"]:checked').each(function(){
        arr.push($(this).val());  //push values in array
    });

    for(var tt = 0; tt < arr.length; tt++) {
        console.log('This is what is in radio: ' + arr[tt]);
    }

    console.log('The length of the array is: ' + arr.length);

}

function setActivityQuestions () {
    var loc = arr;

    //for(var saq = 0; saq < loc.length; saq++) {}
    $('input[type="radio"][name="question"]').each(function () {
        for(var saq = 0; saq < loc.length; saq++) {
            if (document.getElementsByName("question")[saq].value == loc[saq]) {
                console.log('Array Value matches question value!');
                $('input[type=radio][value=' + document.getElementsByName("question")[saq].value + ']').attr('checked', true);
                //break;

            } else {
                console.log('NO MATCH!!!');
            }
        }
    });
}

var totalQuestions = 5;

function progressCheck () {

    var elem = document.getElementById("myBar");
    var progressInfo = document.getElementById("progressText");
    var width = 1;
    //var id = setInterval(frame, 10);

    width = Math.round(100 * currentQuizPage / (totalQuestions));
    elem.style.width = width + '%';
    progressInfo.innerHTML = width + '%';
}

$(document).ready(function(){
    if (document.referrer == 'http://localhost:8080/results.html') {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("global-nav").classList.remove("blur");
        document.getElementById("activity-page").classList.remove("blur");
        document.getElementById('Next').style.visibility = 'visible';
        document.getElementById('myProgress').style.visibility = 'visible';

        isFinalExam = true;

        quiz2();
    }
});
