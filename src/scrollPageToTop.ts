export const scrollPageToTop = (scrollDuration: number): void => {
  if (typeof window.scrollY === 'undefined') {
    window.scrollTo(0);
    return;
  }
  const scrollHeight = window.scrollY,
    scrollStep = Math.PI / (scrollDuration / 15),
    cosParameter = scrollHeight / 2;
  let scrollCount = 0,
    scrollMargin,
    scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        scrollCount = scrollCount + 1;
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      }
      else clearInterval(scrollInterval);
    }, 15);
};

