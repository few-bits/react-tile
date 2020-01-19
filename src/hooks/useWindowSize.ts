import React from 'react';

import { throttle } from '../helpers';

const hasWindow = typeof window === 'object';

export default (callback: () => void, delay = 0) => {
    React.useEffect(() => {
        const handleResize = throttle(() => {
            callback && callback();
        }, delay);

        if (hasWindow) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [callback, delay]);
};
