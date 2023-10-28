console.log("Welcome To My Spotify");
let playImg = document.querySelector(".content");
let sync = document.querySelector(".bottom .ri-play-fill");
let syncpause = document.querySelector(".bottom .ri-pause-line");

let AudioElement1 = new Audio("songs/Admiring-You.mp3");
let song1 = document.querySelector(".s1 .ri-play-fill");
let play1 = document.querySelector(".s1 .ri-pause-line");

song1.addEventListener("click",()=>{
    AudioElement1.play();
    song1.style.display = "none";
    play1.style.display = "block";
    playImg.style.backgroundImage = "url(images/song1.webp)";
    playImg.style.backgroundSize = "cover";

    sync.style.display = "none";
    syncpause.style.display = "block";
})
play1.addEventListener("click",()=>{
    AudioElement1.pause();
    play1.style.display = "none";
    song1.style.display = "block";
   
    syncpause.style.display = "none";
    sync.style.display = "block";
})

let AudioElement2 = new Audio("songs/song2.mp3");
let song2 = document.querySelector(".s2 .ri-play-fill");
let play2 = document.querySelector(".s2 .ri-pause-line");

song2.addEventListener("click",()=>{
    AudioElement2.play();
    song2.style.display = "none";
    play2.style.display = "block";
    playImg.style.backgroundImage = "url(images/song2img.webp)";
    playImg.style.backgroundSize = "cover";

    sync.style.display = "none";
    syncpause.style.display = "block";
})
play2.addEventListener("click",()=>{
    AudioElement2.pause();
    play2.style.display = "none";
    song2.style.display = "block";

    syncpause.style.display = "none";
    sync.style.display = "block";
})

let AudioElement3 = new Audio("songs/song3.mp3");
let song3 = document.querySelector(".s3 .ri-play-fill");
let play3 = document.querySelector(".s3 .ri-pause-line");

song3.addEventListener("click",()=>{
    AudioElement3.play();
    song3.style.display = "none";
    play3.style.display = "block";
    playImg.style.backgroundImage = "url(images/song3img.jpg)";
    playImg.style.backgroundSize = "cover";

    sync.style.display = "none";
    syncpause.style.display = "block";
})
play3.addEventListener("click",()=>{
    AudioElement3.pause();
    play3.style.display = "none";
    song3.style.display = "block";

    syncpause.style.display = "none";
    sync.style.display = "block";
   
})

let AudioElement4 = new Audio("songs/song4.mp3");
let song4 = document.querySelector(".s4 .ri-play-fill");
let play4 = document.querySelector(".s4 .ri-pause-line");

song4.addEventListener("click",()=>{
    AudioElement4.play();
    song4.style.display = "none";
    play4.style.display = "block";
    playImg.style.backgroundImage = "url(images/song4img.jpg)";
    playImg.style.backgroundSize = "cover";

    sync.style.display = "none";
    syncpause.style.display = "block";
})
play4.addEventListener("click",()=>{
    AudioElement4.pause();
    play4.style.display = "none";
    song4.style.display = "block";
   
    syncpause.style.display = "none";
    sync.style.display = "block";
})

let AudioElement5 = new Audio("songs/song5.mp3");
let song5 = document.querySelector(".s5 .ri-play-fill");
let play5 = document.querySelector(".s5 .ri-pause-line");

song5.addEventListener("click",()=>{
    AudioElement5.play();
    song5.style.display = "none";
    play5.style.display = "block";
    playImg.style.backgroundImage = "url(images/song5img.jpg)";
    playImg.style.backgroundSize = "cover";

    sync.style.display = "none";
    syncpause.style.display = "block";
})
play5.addEventListener("click",()=>{
    AudioElement5.pause();
    play5.style.display = "none";
    song5.style.display = "block";
   
    syncpause.style.display = "none";
    sync.style.display = "block";
})

