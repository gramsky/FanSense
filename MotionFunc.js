var oldx=0,oldy=0,oldz=0,minx=0,miny=0,minz=0,maxx=0,maxy=0,maxz=0,
    maxmag=0;

function detectShake(e){

    var accel = e.originalEvent.accelerationIncludingGravity;
    var currx = accel.x,
        curry = accel.y,
        currz = accel.z;    
    var dx = currx-oldx,
        dy = curry-oldy,
        dz = currz-oldz;


    //First time through set min and max values to current
    if(minx==0) {minx=currx;}
    if(miny==0) {miny=curry;}
    if(minz==0) {minz=currz;}
    if(maxz==0) {maxz=currz;}
    if(maxy==0) {maxy=curry;}
    if(maxx==0) {maxx=currx;}

    if(minx>currx) {minx=currx;}
    if(miny>curry) {miny=curry;}
    if(minz>currz) {minz=currz;}
    if(maxx<currx) {maxx=currx;}
    if(maxy<curry) {maxy=curry;}
    if(maxz<currz) {maxz=currz;}

    var shaked=false;
    //var mag = Math.sqrt(dx*dx+dy*dy+dz*dz);
    //$("#shake").html(mag);
    //if( mag > 20){
        //shaked=true;
    //}

    var deltax = maxx-minx;
    var deltay = maxy-miny;
    var deltaz = maxz-minz;
    var net = deltax+deltay+deltaz;

    if(net > 35) {
       shaked=true;
    } 


    oldx=currx;
    oldy=curry;
    oldz=currz;
  
    return shaked;

    //if(maxmag < mag) maxmag = mag;
    //if($(window).maxx < accel.x) $(window).maxx=accel.x;
    //return shaked;
}



function motionFunc(e){
    //if(detectShake(e) && (-1 < diff) && (diff < 1)){
    if(diff==2 || diff==-5){
           //reset if entering movement window
           minx=0;
           miny=0;
           minz=0;
           maxx=0;
           maxy=0;
           maxz=0;

    }

    if(detectShake(e) && (diff==0 || diff==1 || diff==-6)){
        didWave = 1;
        if(diff==1 || diff==-6){
           
        }
        //$("#s").html("shake");
    }
    else{
        //$("#s").html("no shake");
    }
}
