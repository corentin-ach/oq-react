import React, { useEffect, useState } from 'react';

const useResponsive = (): boolean => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const breakPoint = {
    width: 900,
    height: 700,
  };

  const isMobile = dimensions.width < breakPoint.width || dimensions.height < breakPoint.height;
  return isMobile;
};

export default useResponsive;
