import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnlineStatusChange() {
      setIsOnline(true);
    }

    function handleOfflineStatusChange() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOfflineStatusChange);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOfflineStatusChange);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;