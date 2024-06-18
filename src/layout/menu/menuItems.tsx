import React from 'react';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  { key: '/home', icon: <PieChartOutlined />, label: '主页' },
  { key: '/dashboard', icon: <ContainerOutlined />, label: '仪表盘' },
  { key: '/todo-list', icon: <UnorderedListOutlined />, label: '待办列表' },
  { key: '/posts', icon: <FileTextOutlined />, label: '文章总览' },
  {
    key: '/sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '/sub1/5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
  { key: '/about', icon: <DesktopOutlined />, label: '关于' },
];
