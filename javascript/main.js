window.onload = iniLoad();

//滑动条事件
window.onscroll = function() {
    var goup = document.getElementById("goUp");
    var header = document.getElementsByTagName("header")[0];
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 100) {
        goup.style.display = "inline";
    } else {
        goup.style.display = "none";
    }
};

function iniLoad() {
    var godown = document.getElementById('goDown');

    godown.onclick = function() {
        // 返回顶部事件
        document.getElementsByTagName('body')[0].scrollTop = document.getElementsByTagName('body')[0].scrollHeight;
        return false;
    };

    creatTimer();
}

function creatTimer() {
    var timer = document.getElementById("timer");
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h = transTimer(h);
    m = transTimer(m);
    s = transTimer(s);
    time_txt = "当前时间 &#9758;" + h + ":" + m + ":" + s;
    timer.innerHTML = time_txt;
    requestAnimationFrame(creatTimer);
}

function transTimer(elem) {
    if (elem < 10) {
        elem = "0" + elem;
    }
    return elem;
}