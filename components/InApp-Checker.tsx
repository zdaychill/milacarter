'use client';

import { useEffect, useState } from 'react';
import inAppSpy from 'inapp-spy';

export function useInAppBrowser() {
  const [isInApp, setIsInApp] = useState<boolean | null>(null);
  const [appName, setAppName] = useState<string | null>(null);

  useEffect(() => {
    // Run exclusively on the client side
    const { isInApp, appKey } = inAppSpy();
    setIsInApp(isInApp);
    setAppName(appKey || null);
  }, []);

  return { isInApp, appName };
}