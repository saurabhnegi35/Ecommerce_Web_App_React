import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  //   AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
  AndroidOutlined,
  UserAddOutlined,
  //   SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (event) => {
    // console.log(e.key);
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link style={{ textDecoration: 'none' }} to="/">
          Home
        </Link>
      </Item>
      <div className="container-fluid">
        <SubMenu icon={<AndroidOutlined />} title="Username">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </SubMenu>
      </div>

      <Item key="login" icon={<UserOutlined />}>
        <Link style={{ textDecoration: 'none' }} to="/login">
          Login
        </Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />}>
        <Link style={{ textDecoration: 'none' }} to="/register">
          Register
        </Link>
      </Item>
    </Menu>
  );
};

export default Header;
