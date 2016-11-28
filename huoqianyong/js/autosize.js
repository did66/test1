// 弹性字体
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth<=640&&clientWidth>=0){
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }else if(clientWidth>=641&&clientWidth<=950){
                console.log('IPAD');
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);







