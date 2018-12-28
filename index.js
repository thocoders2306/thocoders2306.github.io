// http://quotes.stormconsultancy.co.uk/random.json
// https://api.whatdoestrumpthink.com/api/v1/quotes/random
// https://quota.glitch.me/random
var content = document.getElementById('content')
var author = document.getElementById('author')
var button = document.getElementById('click')
var play = document.getElementById('play')

function quote(){
    fetch('https://quota.glitch.me/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        content.innerHTML = "\" " + myJson.quoteText + " \"";
        author.innerHTML = "- " + myJson.quoteAuthor + " -"
    })
}
button.addEventListener('click', quote);

setInterval(quote, 20000)
// n
var music = ['./music/photograph.mp3', './music/GirlsLikeYou.mp3']

function played(n){
    play.autoplay = true
    if(n > music.length-1){
        n = 0
        return played(n)
    }

    play.onended = function(){
        return played(n+1)
    }
    play.src = music[n]
}
played(0)