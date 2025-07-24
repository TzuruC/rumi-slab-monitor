// 設定經緯度 (例如：台北市的經緯度)
let centerLat = 25.033; // 緯度
let centerLon = 121.5654; // 經度

const options = {
    key: 'O4h1o2phcw4PQD6w6MiPSrstMr0xhls7',
    verbose: true,
    lat: centerLat,
    lon: centerLon,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, (windyAPI) => {
    const { map } = windyAPI;
    map.setView([centerLat, centerLon], 5);
});

// 切換地圖視圖
const MapFloatSwitcher = document.querySelector('.MapFloatSwitcher');

MapFloatSwitcher.addEventListener('mouseover', (e) => {
    MapFloatSwitcher.querySelectorAll('.basemapImg').forEach((el) => {
        el.classList.remove('hidden');
    });
});

MapFloatSwitcher.addEventListener('mouseleave', (e) => {
    console.log(MapFloatSwitcher.querySelector('.check.activeMap').closest('.basemapImg'));
    document.querySelectorAll('.basemapImg').forEach((el) => {
        const hasCheck = el.querySelector('.activeMap') !== null;
        if (!hasCheck) {
            el.classList.add('hidden'); // 如果沒有 .check，移除 hidden
        }
    });
});

MapFloatSwitcher.querySelectorAll('.basemapImg').forEach((el) => {
    el.addEventListener('click', (e) => {
        const hasCheck = el.querySelector('.activeMap') !== null;
        if (!hasCheck) {
            window.location.href = 'FleetManagement.html';
        }
    });
});
