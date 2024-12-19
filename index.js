const displays = document.getElementById("display");
let timer=null;
let startTime=0;
let elpasedTime=0;
let isRunning= false;

function start()
{
    if(!isRunning)
    {
        startTime= Date.now()-elpasedTime;
        timer= setInterval(update,10);
        isRunning= true;
    }
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        elpasedTime=Date.now()-startTime;
        isRunning= false;
    }
}

function reset()
{
     clearInterval(timer);
     startTime=0;
     elpasedTime=0;
     isRunning= false;
     displays.textContent="00:00:00:00";

}

function update()
{
    const currentTime=Date.now();
    elpasedTime=currentTime-startTime;

    let hours=Math.floor(elpasedTime/(1000*60*60));
    let minutes=Math.floor(elpasedTime/(1000*60)%60);
    let seconds= Math.floor(elpasedTime/1000%60);
    let miliseconds=Math.floor(elpasedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    miliseconds=String(miliseconds).padStart(2,"0");

    displays.textContent= (`${hours}:${minutes}:${seconds}:${miliseconds}`);
}