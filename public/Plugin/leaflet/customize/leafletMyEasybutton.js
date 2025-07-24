L.easyButton(
    '<i class="fas fa-expand" style="font-size: 25px;position:absolute;left: 0px;top: 3px;" ></i>',
    function () {
        enterFullScreen();
    },
    '全螢幕',
    { position: 'topright' }
).addTo(mapRoutes);

//全螢幕

function enterFullScreen() {
    var docElm = document.documentElement;
    //W3C
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// 建立控制群組（右上角）
const zoomGroup = L.easyBar([
    L.easyButton(
        '<i class="fas fa-plus" style="font-size: 18px;position:absolute;left: 3px;top: 5px;" ></i>',
        function () {
            mapRoutes.zoomIn(); // 放大
        },
        '放大'
    ),
    L.easyButton(
        '<i class="fas fa-minus" style="font-size: 18px;position:absolute;left:3px;top: 5px;" ></i>',
        function () {
            mapRoutes.zoomOut(); // 縮小
        },
        '縮小'
    ),
]).addTo(mapRoutes);

// 設定位置為 `topright`
zoomGroup.setPosition('topright');
