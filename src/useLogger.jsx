import { useEffect } from 'react';

function useLogger(value, label = 'Value') {
    useEffect(() => {
        console.log(`${label}:`, value);
      }, [value]);
}

export default useLogger;