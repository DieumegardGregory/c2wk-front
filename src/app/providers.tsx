'use client'

import { AuthProvider } from "./context/Authcontext";

export function Providers({ children }: any) {
    return (
        <AuthProvider>{children}</AuthProvider>
    );
  }