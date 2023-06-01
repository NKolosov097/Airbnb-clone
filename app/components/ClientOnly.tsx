"use client";

import { ReactElement, useEffect, useState } from "react";

interface IClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: IClientOnlyProps): JSX.Element | null => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
