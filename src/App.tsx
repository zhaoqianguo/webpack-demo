import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/home';

function Layout() {
  return (
    <div>
      {/* "布局路由（layout）"适合放置一些被所有页面共享的组件，比如导航栏 */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">404</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* <Outlet> 绘制当前（被选中的）激活的子路由组件，你可以理解为是我们事先定义的子路由组件的占位符 */}
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home path={''} />} />
        <Route path="/about" element="about" />
        <Route path="dashboard" element={'dashbord'} />

        <Route path="*" element={'nomatch'} />
      </Route>
    </Routes>
  );
};

export default App;
