var banner = document.getElementById("banner"),
    bannerIn = utils.getElementsByClass("bannerIn", banner)[0],
    oImg = bannerIn.getElementsByTagName("img"),
    bannerBtn = utils.getElementsByClass("bannerBtn", banner)[0],
    oLi = bannerBtn.getElementsByTagName("li"),
    btnL = utils.getElementsByClass("btnL", banner)[0],
    btnR = utils.getElementsByClass("btnR", banner)[0];
var step= 0,timer=null;
function autoMove(){
    if(step==oImg.length-1){
        step=0;
        utils.css(bannerIn,"left", -step*715);
    }
    step++;
    animate(bannerIn,{left:-step*715},500);
    follow();
}
timer=setInterval(autoMove,3000);
function follow(){
    for(var i=0;i<oLi.length;i++){
        var tempStep=step==oImg.length-1?0:step;
        oLi[i].className = i == tempStep ? "btnColor" : "";
    }
}
function clickLi (){
    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        oLi[i].onclick=function(){
            step=this.index;
            animate(bannerIn,{left:-step*715},500);
            follow();
        }
    }
}
clickLi ();
banner.onmouseover=function(){
    clearInterval(timer);
    utils.css(btnL,"display","block");
    utils.css(btnR,"display","block");
};
banner.onmouseout=function(){
    timer=setInterval(autoMove,3000);
    utils.css(btnL,"display","none");
    utils.css(btnR,"display","none");
};
btnR.onclick=autoMove;
btnL.onclick=function(){
    if(step==0){
        step=oImg.length-1;
        utils.css(bannerIn,"left",-step*715)
    }
    step--;
    animate(bannerIn,{left: -step*715},500);
    follow();
};