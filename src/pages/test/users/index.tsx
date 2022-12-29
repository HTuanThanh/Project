import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

import ChangePw from './components/change-pw';
import UpdateProfile from './components/update-profile';

const User = () => {
  const [current, setCurrent] = useState('users');
  const [currentUsers, setCurrentUsers] = useState('edit');
  const router = useRouter();
  const items: MenuProps['items'] = [
    {
      label: (
        <button className="text-sm" onClick={() => router.push('/test/dashboard')}>
          Dashboard
        </button>
      ),
      key: 'dashboard'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push('/test/users')}>
          Users
        </button>
      ),
      key: 'users'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push('/test/products')}>
          Products
        </button>
      ),
      key: 'products'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push('/test/categories')}>
          Categories
        </button>
      ),
      key: 'categories'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push('/test/properties')}>
          Properties
        </button>
      ),
      key: 'properties'
    }
  ];

  const itemUsers: MenuProps['items'] = [
    {
      label: <button>Edit Profile</button>,
      key: 'edit'
    },
    {
      label: <button>Change Password</button>,
      key: 'change_pw'
    }
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e); // Using fake event
    setCurrent(e.key);
  };

  const onChangeUsers: MenuProps['onClick'] = (e) => {
    console.log('click ', e); // Using fake event
    setCurrentUsers(e.key);
  };
  return (
    <>
      <Header style={{ width: '100%', backgroundColor: 'white', padding: 0 }}>
        <div className="h-[3.125rem] border-b-[1px] border-light_gray">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="max-h-[3.125rem] border-light_gray pl-14"
          />
        </div>
      </Header>
      <div className="flex">
        <div className="flex max-w-[30%] flex-[0_0_30%]">
          <Menu
            onClick={onChangeUsers}
            selectedKeys={[currentUsers]}
            mode="vertical"
            items={itemUsers}
            className="custom-edit-menu pl-[10.625rem] pt-6"
            style={{ borderInlineEnd: 0 }}
          />
        </div>
        <div className="flex max-w-[70%] flex-[0_0_70%]">
          <div className="mt-10 mb-[4.5rem] mr-[10.625rem] w-full rounded-[5px] border-[1px] border-light_gray">
            {currentUsers === 'edit' ? <UpdateProfile /> : <ChangePw />}
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
