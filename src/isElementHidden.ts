export const isElementHidden = (element: HTMLElement): boolean => {
  return (element.offsetParent === null)
};
