/**
 * Created by AlanJoseph on 2/26/2018.
 */
var amount = 0;
$( document ).ready(function() {
    setTimeout(function(){
        console.log('Bye Results Page!');

        if(amount == 0) {
            amount++;
            window.location.replace('landing.html');
        } else {
            window.location.replace('index.html');
        }
    }, 3000);
});
