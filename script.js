// JavaScript
// console.log('Hello world!');

const map = L.map('map').setView([33.03131003823665, 130.17773787867662], 14); //拡大縮小値は1〜18

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//国土地理院
//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
//  attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
//}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
const yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([33.041321731644075, 130.16293896597617], { icon: yellowIcon }).addTo(map).bindPopup('ようこそ！').openPopup();

L.marker([33.03131003823665, 130.17773787867662], { icon: pinkIcon }).addTo(map)
  .bindPopup('海中鳥居<br><img src="images/torii.jpg" alt="img">').openPopup();

  const circle = L.circle([33.041321731644075, 130.16293896597617], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = L.polygon([
  [33.02364905405814, 130.17539408478055],
  [33.01626675471563, 130.17409105704337],
  [33.0151997327868, 130.16425035350042]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);