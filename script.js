// JavaScript
// console.log('Hello world!');

const map = L.map('map').setView([33.03131003823665, 130.17773787867662], 14); //拡大縮小値は1〜18

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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