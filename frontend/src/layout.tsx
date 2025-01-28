import React from 'react';
import "../styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FilterProvider } from './context/FilterContext';

function MyApp({ Component, pageProps }: Readonly<{ Component: React.FC; pageProps: Record<string, unknown> }>) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  );
}

export default MyApp;
