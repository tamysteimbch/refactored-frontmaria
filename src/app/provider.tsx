'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ToastContainer />
      {children}
    </ChakraProvider>
  );
}
