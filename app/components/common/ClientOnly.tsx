import { useEffect, useState } from 'react';

import type { FC, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children, fallback = null }) => {
  const hydrated = useHydrated();

  return hydrated ? <>{children}</> : <>{fallback}</>;
};

export default ClientOnly;

let hydrating = true;

const useHydrated = () => {
  const [hydrated, setHydrated] = useState<boolean>(() => !hydrating);

  useEffect(() => {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
};
