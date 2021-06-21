
let  song = document.getElementById('song');
let  display = document.getElementById('display');

display.onclick = function()
{
    if(song.paused)
    {
    song.play();
    display.src = "pause.png"
    }

    else
    {
        song.play();
        display.src = "play.png";
        song.pause();
    }
}
