
$('h1').css('color', 'red');
console.log('Eureka');
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
audioElement.controls = true;
let masterPlay = $('#masterPlay');
let myProgressBar = $('#myProgessBar');
let gif = $('#gif');
let masterSongName = $('#masterSongName');
let timeDur = $(".txt");
console.log(masterSongName.text());
let songItemPlay = $('.songItemPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
timeDur.text("");
let volume = document.querySelector('#volumeControl img');
let vol = document.getElementById('vol');
volume.addEventListener('click',()=>{
    vol.classList.toggle('display');
});
audioElement.volume = vol.value/100;
vol.addEventListener('input',()=>{
    audioElement.volume = vol.value/100;
})

// function setVol(){
//     audioElement.volume = vol.value/100;
// }

// Play pause Function ---
function plPa(x) {
    if (x.attr('src') == "./img/play.svg") {
        x.attr('src', './img/pause.svg');
    }
    else {
        x.attr('src', './img/play.svg');
    }
}
masterPlay.click(function () {
    plPa(masterPlay);
})
// imported songs array from songs.js file ---
import songs from "./songs.js";
// export default songs;
// console.log(songs);

// songItems.forEach((element, i) => {
//     document.getElementsByClassName('imge')[i].src = songs[i].cover;
//     document.getElementsByClassName('songName')[i].innerText = songs[i].songName;
// });
let prg = "";
let auD = ""
audioElement.addEventListener('timeupdate', () => {
    auD = Math.floor(audioElement.duration);
    let progress = Math.floor(parseInt((audioElement.currentTime / audioElement.duration) * 100));
    myProgressBar.val(progress);
    prg = myProgressBar.val();
    if (myProgressBar.val() == "100") {
        $("#next").click();
    }
})
myProgressBar.change(function () {
    audioElement.currentTime = myProgressBar.val() * audioElement.duration / 100;
})
masterPlay.click(function () {
    audioElement.currentTime = prg * audioElement.duration / 100;
})
songItemPlay.click(function () {
    $('.songItemPlay').attr('src', './img/play.svg');
    let b = $(this).attr('id');
    let a = '#' + $(this).attr('id');
    let z = $(a)
    plPa(z);
    masterSongName.text(songs[b - 1].songName);
    $(".songItem").removeClass("csStyle")
    for (i = 0; i < songs.length; i++) {
        if (songs[i].songName == masterSongName.text()) {
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            $(sI).addClass("csStyle");
            let play = './songs/' + p + '.mp3'
            if (z.attr('src') == './img/play.svg') {
                audioElement.src = play;
                masterPlay.attr('src', './img/play.svg');
                audioElement.pause();
            }
            else{
                audioElement.src = play;
                
                masterPlay.attr('src', './img/pause.svg');
                gif.css("opacity", "1");
                audioElement.play();
            }

        }
    }

})
masterPlay.click(function () {
    for (i = 0; i < songs.length; i++) {
        if (songs[i].songName == masterSongName.text()) {
            let h = "#" + (i + 1);
            let p = i + 1;
            songIndex = p;
            let play = './songs/' + p + '.mp3'
            if (masterPlay.attr('src') == './img/play.svg') {
                audioElement.src = play;
                myProgressBar.val(prg);
                audioElement.currentTime = (prg * auD / 100)+1;
                audioElement.pause();
                $(h).attr('src', "./img/play.svg");
                gif.css('opacity', '0');
            }
            else if (masterPlay.attr('src') == './img/pause.svg') {
                audioElement.src = play;
                myProgressBar.val(prg);
                audioElement.currentTime = (prg * auD / 100)+1;
                audioElement.play();
                $(h).attr('src', "./img/pause.svg");
                gif.css('opacity', '1');
            }

        }
    }
})
$("#next").click(function () {
    songItemPlay.attr("src", "./img/play.svg");
    $(".songItem").removeClass("csStyle");
    for (i = 0; i < songs.length; i++) {
        if (masterSongName.text() == songs[i].songName) {

            if (i >= 9) {
                i = 0
            }
            else {
                i += 1;
            }
            $("#" + (i + 1)).attr('src', './img/pause.svg');
            if ($("#" + (i + 1)).attr("src") == './img/pause.svg') {
                masterPlay.attr("src", './img/pause.svg');
            }
            else {
                masterPlay.attr("src", './img/play.svg');
            }
            masterSongName.text(songs[i].songName)
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            // console.log(sI);
            $(sI).addClass("csStyle");
            let play = './songs/' + p + '.mp3'
            if ($(h).attr("src") == './img/pause.svg') {
                audioElement.src = play;
                audioElement.play();
            }


        }
    }
})
$("#previous").click(function () {
    songItemPlay.attr("src", "./img/play.svg");
    $(".songItem").removeClass("csStyle");
    for (i = 0; i < songs.length; i++) {
        if (masterSongName.text() == songs[i].songName) {

            if (i <= 0) {
                i = 0;
            }
            else {
                i -= 1;
            }
            $("#" + (i + 1)).attr('src', './img/pause.svg');
            if ($("#" + (i + 1)).attr("src") == './img/pause.svg') {
                masterPlay.attr("src", './img/pause.svg');
            }
            else {
                masterPlay.attr("src", './img/play.svg');
            }
            masterSongName.text(songs[i].songName)
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            // console.log(sI);
            $(sI).addClass("csStyle");
            let play = './songs/' + p + '.mp3'
            if ($(h).attr("src") == './img/pause.svg') {
                audioElement.src = play; 
                audioElement.play();
            }


        }
    }
})
for (var i = 0; i < songs.length; i++) {
    if (masterSongName.text() == songs[i].songName) {
        $("#songItem" + (i + 1)).addClass("csStyle");
    }
}

for(let i = 0;i<=songs.length;i++){
    $("#songItem"+songs[i].id).click(function(){
        $("#pop"+songs[i].id).removeClass("display");
        $("#in1").show();
    });
    $("#in1").click(function(){
        $("#pop"+songs[i].id).addClass("display");
        $("#in1").hide();
    });
}
