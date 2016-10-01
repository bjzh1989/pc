var toTop = document.getElementById("toTop");
var curHeight = utils.win("clientHeight");
var hiddenHead=document.getElementById("hiddenHead");
window.onscroll = function () {
    var scrollHeight = utils.win("scrollTop");
    if (scrollHeight > curHeight) {
        animate(toTop, {"opacity": 1}, 200);/*回到顶部按钮出现*/
        animate(hiddenHead,{"height":"50"},200);/*顶部导航隐藏菜单出现*/
    } else {
        animate(toTop, {"opacity": 0}, 200);/*回到顶部按钮消失*/
        animate(hiddenHead,{"height":0},200);/*顶部导航隐藏菜单消失*/
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
/*匀速回到顶部设置*/

/******回到顶部设置******/