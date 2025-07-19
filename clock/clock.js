function start(){
    const date=new Date()
    const hour=date.getHours().toString().padStart(2,0)
    const minute=date.getMinutes().toString().padStart(2,0)
    const second=date.getSeconds().toString().padStart(2,0)
    const apperance=`${hour}:${minute}:${second}`+(hour>12?" PM":" AM");
    document.getElementById("clock").textContent=apperance
    
}
start()
setInterval(start,1000)



const display=document.getElementById("display")
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;
function start_stopwatch(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime
        timer=setInterval(update,10)
        isRunning=true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime
        isRunning=false
    }
}
function reset(){
    clearInterval(timer);
    startTime=0
    elapsedTime=0
    isRunning=false
    display.textContent="00:00:00:00"
}
function update(){
    const currentTime=Date.now()
    elapsedTime=currentTime-startTime
    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/1000%60)
    let milliseconds=Math.floor(elapsedTime%1000/10)
    hours=hours.toString().padStart(2,'0')
    minutes=minutes.toString().padStart(2,'0')
    seconds=seconds.toString().padStart(2,'0')
    milliseconds=milliseconds.toString().padStart(2,'0')
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}



