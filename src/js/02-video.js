import player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
const keyLocalStorage = "videoplayer-current-time";
player.setQuality('240p');

player.on('timeupdate', throttle(function ({ seconds }) {


    localStorage.setItem(keyLocalStorage, seconds);

}, 1000));

player.setCurrentTime(localStorage.getItem(keyLocalStorage) || 0)
