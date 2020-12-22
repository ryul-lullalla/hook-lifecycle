import { useEffect, useState } from 'react';
import { BREAK_POINT } from '@constants';
import { useDispatch } from 'react-redux';
import { desktop, tablet, mobile } from '@modules/device';

const useDeviceWidth = currentDevice => {
  const { BREAK_POINT_DESKTOP, BREAK_POINT_TABLET_MIN } = BREAK_POINT;

  const disaptch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const getCurrentWith = () => {
    return window.innerWidth;
  };

  const getDesktopContainerPadding = currentWidth => {
    return 24 + (currentWidth - 1440) / 2;
  };

  const setMediaAndWidth = detectedWidth => {
    setWidth(getDesktopContainerPadding(detectedWidth));
    if (detectedWidth >= BREAK_POINT_DESKTOP) {
      if (currentDevice === 'DESKTOP') {
        return;
      }
      disaptch(desktop('DESKTOP'));
      return;
    }
    if (detectedWidth >= BREAK_POINT_TABLET_MIN) {
      if (currentDevice === 'TABLET') {
        console.log('if TABLET already detected');

        return;
      }

      disaptch(tablet('TABLET'));
      return;
    }

    disaptch(mobile('MOBILE'));
  };

  const resizeWithDebounce = () => {
    let timeoutId = null;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setMediaAndWidth(getCurrentWith()), 150);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWithDebounce);

    currentDevice === null && resizeWithDebounce();
    return () => {
      window.removeEventListener('resize', resizeWithDebounce);
    };
  }, [currentDevice]);

  return [width];
};

export default useDeviceWidth;
