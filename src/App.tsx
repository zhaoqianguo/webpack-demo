import React from 'react';
import { Route, Routes, Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import { Layout } from '@/layout';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { SubAbout } from '@/pages/about/subAbout';
import { TodoList } from '@/pages/todoList';
import { Posts } from './pages/posts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home path={''} />} />
        <Route path="about" element={<About />}>
          <Route index element={<SubAbout />}></Route>
        </Route>
        <Route path="dashboard" element={<About />} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path="posts" element={<Posts />} />
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
