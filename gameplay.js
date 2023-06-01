var videoplay = document.getElementById("videoplay")
var videoplay = document.getElementById("myvideo")

function stopvideo(){
    videoplay.style.display = "none";
}

function playvideo(file){
    myvideo.src = file;
    videoplay.style.display = "block";
}