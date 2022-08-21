import React from 'react';

const setBodyPadding = (footer: React.RefObject<HTMLElement>) => {
  const elHeight = footer.current?.clientHeight;
  if (elHeight) {
    document.body.style.paddingBottom = `${elHeight - 5}px`;
  }
};

export {
  setBodyPadding
};
