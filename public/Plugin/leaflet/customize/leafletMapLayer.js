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
//Google satellite Map
var S_Google_map = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 15,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    renderer: L.canvas(),
});
// Day_Map
var S_Day_Map = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    {
        maxZoom: 15,
        attribution: '',
        renderer: L.canvas(),
    }
);
// Dark_Map
var S_Dark_Map = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 15,
    attribution: '',
    renderer: L.canvas(),
});
mapRoutes.addLayer(SX_Google_map); //預設地圖
// OSM_Map
var OSM_Map = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '',
    renderer: L.canvas(),
});
// TOPO_Map
var TOPO_Map = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '',
    renderer: L.canvas(),
});
// Windy_Map
var Windy_Map = L.tileLayer('');

// ------------- 切換地圖設置 -------------
L.basemapsSwitcher(
    [
        {
            layer: SX_Google_map.addTo(mapRoutes), //DEFAULT MAP
            icon: './assets/Image/GoogleS.jpg',
            name: 'SAT',
            renderer: L.canvas(),
        },
        {
            layer: S_Day_Map,
            icon: './assets/Image/MapType1.png',
            name: 'Light',
        },
        {
            layer: OSM_Map,
            icon: './assets/Image/OSM.png',
            name: 'OSM',
        },
        {
            layer: TOPO_Map,
            icon: './assets/Image/Topo.png',
            name: 'TOPO',
        },
        {
            layer: S_Dark_Map,
            icon: './assets/Image/MapType4.png',
            name: 'Dark',
        },
        {
            layer: Windy_Map,
            icon: './assets/Image/MapType5.jpg',
            name: 'Windy',
        },
    ],
    { position: 'bottomright' }
).addTo(mapRoutes);

// 當選擇 Windy_Map 圖層時跳轉頁面
mapRoutes.on('layeradd', function (e) {
    if (e.layer === Windy_Map) {
        // 跳轉到指定的頁面
        window.location.href = 'FleetWindy.html'; // 在此替換為你希望跳轉的 URL
    }
});

// 其他地圖圖層設置
L.basemapsSwitcher(
    [
        {
            layer: Windy_Map,
            icon: './assets/Image/MapType5.jpg',
            name: 'Windy',
        },
    ],
    { position: 'bottomright' }
).addTo(mapRoutes);
