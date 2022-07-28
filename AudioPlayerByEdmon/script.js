var data = {
    title: [
        "Benny Blanco & Calvin Harris - I Found You",
        "Calvin Harris - Summer",
        "Calvin Harris & Rag'n'Bone Man - Giant",
        "MiyaGi & Andy Panda - Kasandra",
        "MiyaGi & Andy Panda - Minor",
        "Miyagi & Andy Panda - Патрон",
        "MiyaGi & Andy Panda - Там Ревели Горы",
       
        
    ],

    
    song: [
        "music/sound.mp3",
        "music/sound1.mp3",
        "music/sound3.mp3",
        "music/sound4.mp3",
        "music/sound5.mp3",
        "music/sound6.mp3",
        "music/sound7.mp3",
        
       
    ],

    poster: [
        "https://i.gifer.com/GzEU.gif",
        "https://i.pinimg.com/originals/87/98/a6/8798a624a6a59f679c9b2c92fedf76f7.gif",
        "https://thumbs.gfycat.com/UnconsciousLeadingCod-max-1mb.gif",
        "https://thumbs.gfycat.com/PolishedUniqueBee-max-1mb.gif",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/469d89109454817.5fd3e05f91674.gif",
        "http://sun9-63.userapi.com/impg/xn3aVi7rcD-jBq9Tuj3R-35kik3LDYYieQF1nQ/mCFkuIjdi3s.jpg?size=604x604&quality=95&sign=0494371afc100ee7a9e487fb81d642a6&type=album",
        "https://i.pinimg.com/originals/4e/30/c9/4e30c95dc885f880a2c2797fdee0e042.gif",
        
    ]
}

var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
playSong()
}

function playSong() {
song.src = data.song[currentSong];
let songTitle = document.getElementById("songTitle");
songTitle.textContent = data.title[currentSong];
let img = document.getElementById("row1");
img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
let main = document.getElementById("main")
main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
song.play();
}



function playOrPauseSong() {
let play = document.getElementById("play");


if (song.paused) {
song.play();
play.src = "images/pause.png" //pause
} else {
song.pause();
play.src = "images/play-button-arrowhead.png" //play
}

}



song.addEventListener("timeupdate", function (){
console.log(song.currentTime);
console.log(song.duration);

let fill = document.getElementById("fill")

let position = song.currentTime / song.duration;
fill.style.width = position * 100 + "%";

convertTime(song.currentTime)


if (song.ended) {
next()
}

})

function convertTime(seconds){

    let currentTime = document.getElementById("currentTime");


    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(song.duration))
}

function totalTime(seconds){


    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    
    if(isNaN(min) || isNaN(sec)){
        return false
    }else{
    
    currentTime.textContent += " / " + min + ":" + sec
    }
};

function next (){
currentSong++;
if (currentSong == data.song.length ){
    currentSong = 0
}
playSong();
play.src = "images/pause.png"
}


function previous(){
currentSong--;
if (currentSong < 0){
currentSong = data.song.length - 1;

 }
playSong();
play.src = "images/pause.png"
}

function muted(){
    let mute = document.getElementById("mute");

    if(song.muted){
        song.muted = false
        mute.src = "images/volume.png"
    }else{
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease(){
    song.volume -=0.2
}

function increase(){
    song.volume +=0.2
}
