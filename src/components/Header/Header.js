import React, { SearchBar } from 'react';
import "./Header.css";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import logo_rotary from '../../image/header/logo.png';
import cart_icon from '../../image/header/cart.svg';
import account from '../../image/header/account.svg';


export default function Header() {
  return (
    
    <div class="topnav">
      
      <a class="active" href="#home"><img 
        src={logo_rotary}
        alt='logo'
      /></a>
      <a class="topnav_a" href="#news">Danh mục sản phẩm</a>
      <a class="topnav_a" href="#contact">Giới thiệu</a>
      <a class="topnav_a" href="#about">Liên hệ</a>
      <a class="topnav_a" href="#language">Ngôn ngữ</a>

      {/* <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="  Tìm kiếm" name="search"/>
            <button type="submit">
              <SearchOutlinedIcon/>
            </button>
          </form>
      </div> */}

      {/* <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800
        }}
      /> */}

      <a class="cart" href="#home"><img 
        src={cart_icon}
        alt='logo'
      /></a>
      <a class="account" href="#home"><img 
        src={account}
        alt='logo'
      /></a>

    </div>

  )
};

