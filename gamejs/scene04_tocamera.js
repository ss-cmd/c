function toCamera() {
    console.log('iam scene03 sayname');
    
    var video;
    var snapshot = [];
    //let  systemText;

    this.enter = function(){
        video = createCapture(VIDEO);
        video.size(640, 480);
        video.hide();
        //system error,12s
        mySound2.play();
        
        //machine back, say your name to start the game,33s,
        setTimeout(showtogame,20000);
        // setTimeout(showLouder, 55000);
    }

    this.draw = function(){
        if (frameCount % 50 == 0) {
            // rect(width/2,height/2,20,20); 
            noStroke();
            background(random(256), random(256), random(256));
        }
        if (frameCount % 100 == 0) {
            takesnap();    
        }
        setTimeout(systemText, 10000);
    }

    function takesnap() {
        //set the camera
        snapshot = video.get();
        //image(snapshot, width/6, height/2); // draw the video frame to canvas
        image(snapshot, width/2-300, height/2-100);
      }

    function systemText(){
        textSize(50);         
        noStroke();
        fill(174,31,35);
        textFont(font2);
        textAlign(CENTER, CENTER);
        text("System error", width / 2, height / 2-200);
        text("The next step will be excuted ", width / 2, height / 2-150);
    }

    function showtogame(){
        video.stop();
        mgr.showScene(game);
        //console.log('this scene03 ends');
    }

}
