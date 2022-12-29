import '../styles/global.css';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Layout, Menu, Space } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  ROUTE_LOGOUT,
  ROUTER_ABOUT,
  ROUTER_ADVERTISE,
  ROUTER_CONTACT,
  ROUTER_HELP_CENTER,
  ROUTER_PRIVACY,
  ROUTER_PROFILE,
  ROUTER_TERMS
} from '@/constants/routers/default';
import { AuthContextProvider } from '@/context/authContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState('dashboard');
  const items: MenuProps['items'] = [
    {
      label: <button onClick={() => router.push(ROUTER_PROFILE)}>Profile</button>,
      key: '0'
    },
    {
      label: <button onClick={() => router.push(ROUTE_LOGOUT)}>Logout</button>,
      key: '1'
    }
  ];

  const itemsFooter: MenuProps['items'] = [
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_HELP_CENTER)}>
          Help Center
        </button>
      ),
      key: 'help-center'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_ABOUT)}>
          About us
        </button>
      ),
      key: 'about'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_ADVERTISE)}>
          Advertise with us
        </button>
      ),
      key: 'advertise'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_CONTACT)}>
          Contact us
        </button>
      ),
      key: 'contact'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_TERMS)}>
          Terms
        </button>
      ),
      key: 'terms'
    },
    {
      label: (
        <button className="text-sm" onClick={() => router.push(ROUTER_PRIVACY)}>
          Privacy
        </button>
      ),
      key: 'contact'
    }
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e); // Using fake event
    setCurrent(e.key);
  };
  return (
    <AuthContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            backgroundColor: 'white',
            padding: 0,
            maxHeight: '3.125rem'
          }}
        >
          <div className="flex h-[3.125rem] w-full items-center justify-between border-b-[1px] border-light_gray bg-white pl-[4.625rem] xsm:pl-4">
            <img src="/assets/images/leather-market.png" alt="logo" width={171.5} height={14} />
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              className="right-0 mr-[4.5rem] flex h-full flex-row items-center sm:mr-4"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="h-9 w-9 overflow-hidden rounded-[50%] text-center">
                    <img
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" // Use fake API
                      alt="avatar"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="mx-2 text-sm text-body xsm:hidden">
                    Hello, <span className="font-semibold">user123</span>
                  </div>
                  <DownOutlined className="h-3 w-2 text-light_gray" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          <Component {...pageProps} />
        </Content>
        <Footer style={{ backgroundColor: 'white', padding: 0 }}>
          <div className="mt-auto flex h-20 items-center border-t-[1px] border-light_gray text-body md:h-auto md:flex-col">
            <div className="my-5 flex max-w-[25%] flex-[0_0_25%] flex-col items-center pl-20 lg:pl-10 md:mb-0 md:max-w-[100%] md:flex-[0_0_100%] md:justify-center md:p-0">
              <img src="/assets/images/leather-market-dark.png" alt="logo" width={171.5} height={14} />
              <div className="mt-3 text-xs">Copyright 2022 Leather Market Co. Ltd.</div>
            </div>
            <div className="max-w-[75%] flex-[0_0_75%] md:max-w-[90%] md:flex-[0_0_90%] sm:text-[0.5rem]">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={itemsFooter}
                className="border-none pl-14 md:pl-0 xsm:pl-0"
              />
            </div>
          </div>
        </Footer>
      </Layout>
    </AuthContextProvider>
  );
};

export default MyApp;
