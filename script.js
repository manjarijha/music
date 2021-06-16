
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
        song.paused();
        display.src = "pause.png"
    }
}
