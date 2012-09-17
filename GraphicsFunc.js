function drawBigRect(layer,color){
    layer.removeChildren();        
    var r = new Kinetic.Rect({x: 0, y: 0, 
                              width: $(window).innerWidth(),
                              height: $(window).innerHeight(),
                              fill: color});
    layer.add(r);
    layer.draw();
}

function initGraphics(stage, layer){
    stage = new Kinetic.Stage({container: "maincanvas",
                               width: $(window).innerWidth(),
                               height: $(window).innerHeight()
                              });
    layer = new Kinetic.Layer();
    stage.add(layer);
}

function flashText(layer,tcolor,bcolor,t){
    layer.removeChildren();        
    drawBigRect(layer,"black");
    var text = new Kinetic.Text({
        x: 10,
        y: 10,
        fill: bcolor,
        text: t,
        fontSize: 50,
        fontFamily: 'Arial',
        textFill: tcolor,
        padding: 20,
        align: 'center',
        cornerRadius: 10
    });
    layer.add(text);
    layer.draw();

    var anim = new Kinetic.Animation({
        func: function(frame) {
            var currtc = text.getTextFill();
            var currfc = text.getFill();
            text.setFill(currtc);
            text.setTextFill(currfc);
        },
        node: layer
    });
    
    anim.start();
}


function bounceText(stage,layer,tcolor,bcolor,t){
    layer.removeChildren();        
    drawBigRect(layer,"black");
    var text = new Kinetic.Text({
        x: 10,
        y: 10,
        fill: bcolor,
        text: t,
        fontSize: 50,
        fontFamily: 'Arial',
        textFill: tcolor,
        padding: 20,
        align: 'center',
        cornerRadius: 10
    });
    layer.add(text);
    layer.draw();
    
    var amplitude = 50;
    var period = 2000;
    // in ms
    var centerX = stage.getWidth() / 2;

    var anim = new Kinetic.Animation({
        func: function(frame) {
            text.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period)
                      + centerX-150);
        },
        node: layer
    });
    
    anim.start();
}
