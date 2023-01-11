import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const keyStorage = 'videoplayer-current-time';
const player = new Player(iframe);
const savedTime = localStorage.getItem(keyStorage);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    const timeSave = seconds;

    localStorage.setItem(keyStorage, timeSave);
  }, 1000)
);
