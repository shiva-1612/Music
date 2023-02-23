var totalbuttons=document.querySelectorAll("button").length;
for(var i=0;i<totalbuttons;i++){

    document.querySelectorAll("button")[i].addEventListener("click",handclick);
    function handclick(){
var s=new Audio("music/s.mp3");
var h=new Audio("music/h.mp3") 
    var i=new Audio("music/i.mp3");
    var v=new Audio("music/v.mp3");
    var a=new Audio("music/a.mp3");
    s.play();
    h.play();
    i.play();
    v.play();
    a.play();
    }

}

