import { RefObject, useEffect, useRef } from 'react';

const useOutlier = <T extends HTMLElement>(
  callback: () => void,
): RefObject<T> => {
  const outlierRef = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        outlierRef.current &&
        event.target &&
        !outlierRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return outlierRef;
};

export default useOutlier;
