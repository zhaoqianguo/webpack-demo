import React from 'react';
import { memo } from 'react';
import { Button, Menu } from 'antd';
import { items } from './menuItems';
import { useNavigate } from 'react-router-dom';
import css from './style.less';

export const LayoutMenu = memo((props) => {
  const navigate = useNavigate();

  const handleMenuChange = (v: any) => {
    navigate(v.keyPath.reverse().join('/'));
  };

  return (
    <div className={css.wrapper}>
      {/* <Button type="primary" style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuChange}
      />
    </div>
  );
});
