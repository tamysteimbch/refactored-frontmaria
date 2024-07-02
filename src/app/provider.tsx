'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { makeStore } from '@/lib/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={makeStore()}>
      <ChakraProvider>
        <ToastContainer />
        {children}
      </ChakraProvider>
    </Provider>
  );
}
