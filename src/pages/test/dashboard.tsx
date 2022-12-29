import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  ROUTER_CATEGORIES,
  ROUTER_DASHBOARD,
  ROUTER_PRODUCTS,
  ROUTER_PROPERTIES,
  ROUTER_USERS
} from '@/constants/routers/default';

const Dashboard = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('dashboard');
  const items: MenuProps['items'] = [
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_DASHBOARD)}>
          Dashboard
        </button>
      ),
      key: 'dashboard'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_USERS)}>
          Users
        </button>
      ),
      key: 'users'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_PRODUCTS)}>
          Products
        </button>
      ),
      key: 'products'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_CATEGORIES)}>
          Categories
        </button>
      ),
      key: 'categories'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_PROPERTIES)}>
          Properties
        </button>
      ),
      key: 'properties'
    }
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e); // Using fake event
    setCurrent(e.key);
  };
  return (
    <>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'white', padding: 0 }}>
        <div className="h-[3.125rem] border-b-[1px] border-light_gray">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="max-h-[3.125rem] border-light_gray pl-14 xsm:pl-0"
          />
        </div>
      </Header>
      <div className="m-[4.625rem] mt-10 min-h-[747px] rounded-[5px] border-[1px] border-light_gray xsm:m-0 xsm:border-0"></div>
    </>
  );
};
export default Dashboard;
