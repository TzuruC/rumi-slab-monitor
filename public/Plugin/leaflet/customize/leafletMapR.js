var mapRoutes;

// 建立地圖並指定預設的 renderer 為 L.canvas()
var mapRoutes = L.map('mapR', {
    center: [25.033493, 121.564101], // 預設中心點
    zoom: 13, // 預設縮放級別
    zoomControl: false, // 關閉縮放控制
    preferCanvas: true, // 強制使用 Canvas 渲染
    renderer: L.canvas(), // 設置渲染器為 Canvas
}).setView([22.033493, 120.564101], 5);

console.log(mapRoutes);
// 滑鼠事件
// 將十進制度數轉換為「度 分」格式的函數
// function latlngFormat(coord, isLat) {
//     var absolute = Math.abs(coord);
//     var degrees = Math.floor(absolute);
//     var minutes = (absolute - degrees) * 60;
//     // 保留三位小數
//     minutes = minutes.toFixed(5);
//     var direction;
//     if (isLat) {
//         direction = coord >= 0 ? 'N' : 'S';
//     } else {
//         direction = coord >= 0 ? 'E' : 'W';
//     }
//     return degrees + 'º ' + minutes + ' ' + direction;
// }
// mapRoutes.on('mousemove', function (e) {
//     var lat = e.latlng.lat;
//     var lng = e.latlng.lng;

//     // 將經緯度轉換為度和分格式
//     var latText = latlngFormat(lat, true);
//     var lngText = latlngFormat(lng, false);

//     // 更新頁面上的經緯度顯示
//     document.querySelector('.lat').textContent = latText;
//     document.querySelector('.lng').textContent = lngText;
// });
// 確定頁面載入完畢後再渲染
setTimeout(function () {
    mapRoutes.invalidateSize();
}, 500);
