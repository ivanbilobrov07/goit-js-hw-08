import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import { videoTimeUpdateHandler } from './02-helpers/videoTimeUpdateHandler';
import { VIDEO_KEY } from './02-helpers/common';

const iframeRef = document.querySelector('#vimeo-player');

const secondToPlay = localStorage.getItem(VIDEO_KEY) ?? 0;
const player = new Player(iframeRef);

player.on('timeupdate', throttle(videoTimeUpdateHandler, 1000));

player.setCurrentTime(secondToPlay);
