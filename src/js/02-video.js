import vimeoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';
import storage from './storage';

const iFrame = document.querySelector('#vimeo-player');

const newVimeoPlayer = new vimeoPlayer(iFrame);

const onTimeUpdate = e => storage.save('videoplayer-current-time', e.seconds);

newVimeoPlayer.on('timeupdate', lodashThrottle(onTimeUpdate, 1000));

const currentTime = storage.load('videoplayer-current-time');

if (currentTime) newVimeoPlayer.setCurrentTime(currentTime);
