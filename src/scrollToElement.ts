export const scrollToElement = (container: HTMLElement, element: HTMLElement): boolean => {
  if (!container || !element) return false;
  if (element.offsetTop < container.scrollTop) {
    container.scrollTop = element.offsetTop;
    container.scrollTop -= element.offsetHeight / 2;
  }
  if (element.offsetTop + element.offsetHeight > container.offsetHeight + container.scrollTop) {
    container.scrollTop = (element.offsetTop + element.offsetHeight) - container.offsetHeight;
    container.scrollTop += element.offsetHeight / 2;
  }
  return true;
};
