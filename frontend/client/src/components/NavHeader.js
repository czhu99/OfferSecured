import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import '../css/NavHeader.css';

const { Header } = Layout;

function NavHeader() {
  return (
    <Header className="nav-desktop">
      <div className="flex-row">
        <Link to="/">
          <div className="nav-desktop-logo" />
        </Link>
        <div className="nav-title">
          OfferSecured
        </div>
      </div>
      <Menu mode="horizontal">
        <Menu.Item key="movies">
          <Link to="/">
            Enter a Queue
          </Link>
        </Menu.Item>
        
        <Menu.Item key="profile">
          <Link to="/profile">
            Your Profile
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default NavHeader;