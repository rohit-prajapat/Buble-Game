var hitrn;
function setBubles()
{
    let bubles = "";
    for(let i=0; i<=107; i++)
    {
        let n = Math.floor(Math.random() * 10);
        bubles += `<div class="buble">${n}</div>`
        
    }
    const panelBotton = document.querySelector(".panel-bottom");
    panelBotton.innerHTML = bubles;
}

function TimerFunction(){

    let time = 60;

    function runTime()
    {
        let timerInt = setInterval(function(){
            if(time<=0)  
            {
                clearInterval(timerInt);
                
                
                document.querySelector(".panel-bottom").innerHTML ="<h1>Game Over </h1>";
            }
            else{
                time--;
                let t = document.querySelector("#current-time");
                t.textContent = time;

                
                
            }
            
        },1000)

        
    }
    runTime();
}

function HitFunction()
{
    hitrn = Math.floor(Math.random() * 10);
    let t = document.querySelector("#hitVal");
    t.textContent = hitrn;
    let check = document.querySelector("#check");
    check.textContent = hitrn;
}


setBubles();
HitFunction();
TimerFunction();




var score = 0;

function increaseScore()
{
    score +=10;
    
    document.querySelector("#scoreVal").textContent = score;

}



document.querySelector(".panel-bottom").addEventListener("click",function(details){
  
    var n = Number(details.target.textContent)
    if(n === hitrn)
    {
        increaseScore();
        setBubles();
        HitFunction();

    }
})



