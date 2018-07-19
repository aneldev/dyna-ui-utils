import {getPageYPosition} from "./getPageYPosition";

export const smoothScrollToY = (y: number, duration: number): void => {
  let startY = getPageYPosition();
  let stopY = y;
  let distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < duration) {
    scrollTo(0, stopY);
    return;
  }
  let speed = Math.round(distance / duration);
  if (speed >= 20) speed = 20;
  let step = Math.round(distance / 25);
  let leapY = stopY > startY ? startY + step : startY - step;
  let timer = 0;
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
};
