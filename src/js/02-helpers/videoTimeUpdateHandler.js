import { VIDEO_KEY } from './common';

const videoTimeUpdateHandler = e => {
  const second = e.seconds;
  localStorage.setItem(VIDEO_KEY, second);
};

export { videoTimeUpdateHandler };
