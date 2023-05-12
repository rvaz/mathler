import type { RefObject } from 'react';
import { useEffect } from 'react';

/**
 * useClickOutside
 * Detect click outside the given targets (ref) and fires the callback (handler)
 *
 * @param {Function} handler Callback to be fired when detects click outside of ref
 * @param {React.MutableRefObject | React.MutableRefObject[]} refs Targets to listen
 */
export const useClickOutside = (
  handler: (ev: MouseEvent | TouchEvent) => void,
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
) => {
  useEffect(() => {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    if (!handler || !refs || !refsArray?.length) {
      return;
    }

    const listener = (ev: MouseEvent | TouchEvent) => {
      for (const ref of refsArray) {
        if (ref?.current?.contains?.(ev.target as Node)) {
          return;
        }
      }

      handler(ev);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, refs]);
};
