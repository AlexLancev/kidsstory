import { useEffect, useState } from 'react';

export const useGettingWindowWidth = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const windowResize = () => setInnerWidth(window.innerWidth);

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return innerWidth;
};
