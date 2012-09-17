var phptime=-10;

function getClock(){
    //return Math.floor((new Date()).getTime()%14000/2000);
    //$.get('/~ipcy/m/n/num.php',function(data){phptime = parseInt(data);});
    //return phptime;
    
    $.getJSON('http://www.umiacs.umd.edu/~ipcy/m/n/jsonclock.php?callback=?',
              function(data){phptime=parseInt(data.time);});
    return phptime;
}

function evalScore(){
    return getClock()-section();
}

function periodicCheck(){
    diff = section - getClock();
    $(s).html("Waves Missed:  " + missedWaves);

    if(diff==2 || diff==-5){
        bounceText(stage,layer,"blue","white","WAVE");
        if(navigator.vibrate){
            navigator.vibrate([1000,1000]);
        }
    }

    if(diff==1 || diff==-6){
        flashText(layer,"black","white","WAVE");
        if(navigator.vibrate){
            navigator.vibrate([200,200,200,200]);
        }
        if(evalCycle==0){
           didWave=0;
           evalCycle = 1;
        }
    }

    if(diff==0 && didWave){
        drawBigRect(layer,rainbow[row][section]);
        if(navigator.vibrate){
            navigator.vibrate([100,100,100,100,
                               100,100,100,100]);
        }
    }

    if(diff==-1 || diff==5){
        drawBigRect(layer,"black");
        //now score wave
        if(evalCycle == 1){
           if(didWave == 1 && evalCycle == 1){
              madeWaves++;
           }
           else {
              missedWaves++;
           }
           evalCycle = 0;
        }
    }
}

function init(){
    section = prompt("Enter Section Number:");
    row = prompt("Enter Row Number:");

    //ADjust for array.  No one sits in section 0 or row 0  :)
    row = row - 1;
    seat = seat - 1;

    //initialize scoring 
    missedWaves = 0;
    madeWaves = 0;
    didWave = 0;
    evalCycle = 0;

    //init graphics
    stage = new Kinetic.Stage({container: "maincanvas",
                               width: $(window).innerWidth(),
                               height: $(window).innerHeight()
                              });
    layer = new Kinetic.Layer();
    stage.add(layer);        
    drawBigRect(layer,"black");
}
