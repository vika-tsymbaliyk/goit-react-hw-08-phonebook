// import styled from 'styled-components'

// export const Layout = styled.div`
//    display: flex;
//     margin: 0 auto;
//     padding: 0 25px;
//     flex-direction: column;
//     max-width: 1200px;
//     gap: 20px;`
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
