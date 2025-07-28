var mapRoutes;

// 建立地圖並指定預設的 renderer 為 L.canvas()
var mapRoutes = L.map('mapR', {
    center: [25.033493, 121.564101], // 預設中心點
    zoom: 13, // 預設縮放級別
    zoomControl: false, // 關閉縮放控制
    preferCanvas: true, // 強制使用 Canvas 渲染
    renderer: L.canvas(), // 設置渲染器為 Canvas
}).setView([22.033493, 120.564101], 5);

// 滑鼠事件
// 將十進制度數轉換為「度 分」格式的函數
function latlngFormat(coord, isLat) {
    var absolute = Math.abs(coord);
    var degrees = Math.floor(absolute);
    var minutes = (absolute - degrees) * 60;
    // 保留三位小數
    minutes = minutes.toFixed(5);
    var direction;
    if (isLat) {
        direction = coord >= 0 ? 'N' : 'S';
    } else {
        direction = coord >= 0 ? 'E' : 'W';
    }
    return degrees + 'º ' + minutes + ' ' + direction;
}
// 設定經緯度 (例如：台北市的經緯度)
var centerLat = 25.033; // 緯度
var centerLon = 121.5654; // 經度

/////////////////
// 切換地圖
/////////////////

// Google Map
var SX_Google_map = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 15,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    renderer: L.canvas(),
});
SX_Google_map.addTo(mapRoutes);
// 確定頁面載入完畢後再渲染
setTimeout(function () {
    mapRoutes.invalidateSize();
}, 500);
