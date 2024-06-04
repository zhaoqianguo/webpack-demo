import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Layout } from '@/layout';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home path={''} />} />
        <Route path="about" element={<About />}>
          <Route index element={'a34a'}></Route>
        </Route>
        <Route path="dashboard" element={'dashbord'} />
        <Route
          path="sub1"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="8" element={'sub1/8'}></Route>
        </Route>
        <Route path="*" element={'nomatch'} />
      </Route>
    </Routes>
  );
};

export default App;
