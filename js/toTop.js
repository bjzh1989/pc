var toTop = document.getElementById("toTop");
var curHeight = utils.win("clientHeight");
var hiddenHead=document.getElementById("hiddenHead");
window.onscroll = function () {
    var scrollHeight = utils.win("scrollTop");
    if (scrollHeight > curHeight) {
        animate(toTop, {"opacity": 1}, 200);/*�ص�������ť����*/
        animate(hiddenHead,{"height":"50"},200);/*�����������ز˵�����*/
    } else {
        animate(toTop, {"opacity": 0}, 200);/*�ص�������ť��ʧ*/
        animate(hiddenHead,{"height":0},200);/*�����������ز˵���ʧ*/
    }
};
toTop.onclick = function () {
    var duration = 800,
        interval = 16,
        timer = null;
    var curHeight = utils.win("scrollTop");
    var speed=curHeight/duration*interval;
    clearInterval(timer);
    timer=setInterval(function(){
        if(curHeight<=0){
            clearInterval(timer);
            utils.win("scrollTop",0);
        }
        curHeight-=speed;
        utils.win("scrollTop",curHeight);
    },interval)
};
/*���ٻص���������*/

/******�ص���������******/