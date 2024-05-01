// Menuitem.js
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./menuitem.css";

const Menuitem = ({ open, handleClose }) => {
  const openMenu = Boolean(open);

  return (
    <Menu
      paddingBottom='0'
      paddingTop='0'
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <div className="dr" style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <Link to="/categories/popular"  style={{textDecoration:'none', color:'black'}}><MenuItem onClick={handleClose}>Popular</MenuItem></Link>
        <Link to="/categories/toprated"  style={{textDecoration:'none', color:'black'}}><MenuItem onClick={handleClose} >Top Rated</MenuItem></Link>
        <Link to="/categories/upcoming" style={{textDecoration:'none', color:'black'}}><MenuItem onClick={handleClose} >Upcoming</MenuItem></Link>
      </div>
    </Menu>
  )
}

export default Menuitem;
