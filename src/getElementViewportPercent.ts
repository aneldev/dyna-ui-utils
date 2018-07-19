export const getElementViewportPercent = (element: HTMLElement): number => {
  if (element.offsetParent === null) return 0;

  const windowHeight: number = window.innerHeight || document.documentElement.clientHeight;
  const clientRect: ClientRect = element.getBoundingClientRect();

  let elementVisibleHeight: number =
    clientRect.top > 0
      ? windowHeight - clientRect.top
      : clientRect.height + clientRect.top;

  if (elementVisibleHeight <= 0) return 0;
  if (elementVisibleHeight >= clientRect.height) return 100;
  return 100 * elementVisibleHeight / clientRect.height;
};
