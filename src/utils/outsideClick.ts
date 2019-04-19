import Event from './events';

const outSideClick = (action: boolean, onOutsideCallback: any) => {
  if (action) {
    Event.on(document.body, 'touchstart', onOutsideCallback || (() => {}));
    Event.on(document.body, 'click', onOutsideCallback || (() => {}));
  } else {
    Event.off(document.body, 'touchstart', onOutsideCallback || (() => {}));
    Event.off(document.body, 'click', onOutsideCallback || (() => {}));
  }
};

export default outSideClick;
