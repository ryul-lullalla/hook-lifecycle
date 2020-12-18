import { useEffect, useState } from 'react';
import { BREAK_POINT } from '@constants';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { desktop, tablet, mobile } from '@modules/device';

const useDeviceWidth = currentDevice => {
  const { deviceStore } = useSelector(state => state);
  console.log(deviceStore);
  const {
    BREAK_POINT_MOBILE,
    BREAK_POINT_TABLET,
    BREAK_POINT_DESKTOP,
    BREAK_POINT_TABLET_MIN,
    BREAK_POINT_MOBILE_MAX,
  } = BREAK_POINT;

  const disaptch = useDispatch();
  // const [device, setDevice] = useState(currentDevice);
  console.log(
    'after device useState===',
    // device || 'XX',
    currentDevice,
    deviceStore,
  );
  const [width, setWidth] = useState(window.innerWidth);
  console.log(
    'after width useState===',
    // device || 'XX',
    currentDevice,
    deviceStore,
    width,
  );
  const detectWidth = () => {
    console.log(
      'detectWidth Hook===',
      currentDevice || 'XX',
      deviceStore.device || 'XX',
      width,
      // device || 'XXX',
    );
    const currentWidth = window.innerWidth;
    console.log('before setWidth being called', currentWidth);
    setWidth(() => {
      console.log('setWidth!!!!===');
      return currentWidth;
    });
    console.log('2', currentWidth);
    if (currentWidth >= BREAK_POINT_DESKTOP) {
      console.log('if desktop size');
      console.log(
        'if desktop size of detectWidth Hook===',
        currentDevice || 'XX',
        deviceStore.device || 'XX',
        width,
        currentWidth,
        // device || 'XXX',
      );

      if (currentDevice === 'DESKTOP') {
        console.log('if desktop already detected');
        return;
      }
      console.log('if desktop not detected');
      disaptch(desktop('DESKTOP'));
      return;
    }
    if (currentWidth >= BREAK_POINT_TABLET_MIN) {
      console.log('if TABLET size');
      console.log(
        'if TABLET size of detectWidth Hook===',
        currentDevice || 'XX',
        deviceStore.device || 'XX',
        width,
        currentWidth,
        // device || 'XXX',
      );

      if (currentDevice === 'TABLET') {
        console.log('if TABLET already detected');

        return;
      }
      console.log('if TABLET not detected');

      disaptch(tablet('TABLET'));
      return;
    }
    console.log('if MOBILE size');

    disaptch(mobile('MOBILE'));

    // if (device === 'DESKTOP' && currentWidth < BREAK_POINT_DESKTOP) {
    //   console.log('DESKTOP');
    //   setDevice('TABLET');
    //   return;
    // }
    // if (device === 'TABLET' && currentWidth < BREAK_POINT_TABLET_MIN) {
    //   console.log('TABLET');

    //   setDevice('MOBILE');
    //   return;
    // }
    //   switch (currentWidth) {
    //       case (currentWidth > )
    //   }
    // setWidth(window.innerWidth);
  };

  //   window.addEventListener('resize', detectWidth);
  useEffect(() => {
    // setDevice(currentDevice);
    console.log('useEffect in customHook', currentDevice);
    window.addEventListener('resize', detectWidth);
    // window.addEventListener('resize', detectTest);

    currentDevice === null && detectWidth();
    return () => {
      console.log('unMount customHook');
      window.removeEventListener('resize', detectWidth);
    };
  }, [currentDevice]);
  console.log(
    'end of customWidthHook ===',
    currentDevice || 'XX',
    deviceStore.device || 'XX',
    width,
    // device || 'XXX',
  );
  return [width];
};

export default useDeviceWidth;
