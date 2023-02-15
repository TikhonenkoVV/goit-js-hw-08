import vimeoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';
import storage from './storage';

let x = 0;
const iFrame = document.querySelector('#vimeo-player');

const newVimeoPlayer = new vimeoPlayer(iFrame);

const onPlay = e => storage.save('videoplayer-current-time', 2);

newVimeoPlayer.on('timeupdate', () => {
    lodashThrottle(onPlay, 1000);
    // console.log(storage);
});

// console.log(localStorage);

// const log = console.log(curTime);
