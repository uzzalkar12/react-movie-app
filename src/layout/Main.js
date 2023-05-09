import React from 'react';
import {HolderOutlined, PaperClipOutlined} from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//     (icon, index) => {
//         const key = String(index + 1);
//
//         return {
//             key: `sub${key}`,
//             icon: React.createElement(icon),
//             label: `subnav ${key}`,
//
//             children: new Array(4).fill(null).map((_, j) => {
//                 const subKey = index * 4 + j + 1;
//                 return {
//                     key: subKey,
//                     label: `option${subKey}`,
//                 };
//             }),
//         };
//     },
// );

function Main(){
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={[
                            {
                                key: '/',
                                icon: <HolderOutlined />,
                                label: 'subnav 1',
                                children: [
                                    {
                                        key: '/',
                                        label: 'subnav 1-1',
                                    }
                                ]
                            },
                            {
                                key: '/profile',
                                icon: <PaperClipOutlined />,
                                label: 'subnav 2',
                                children: [
                                    {
                                        key: '/',
                                        label: 'subnav 2-1',
                                    }
                                ]
                            }
                        ]}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                    <Footer style={{ textAlign: 'center',}}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Main;