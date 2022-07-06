import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {  NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"

const Navbar = () => {
  const [value, setValue] = useState('')
  const handleOnChange = (e, value) => {
    setValue(value)
  }

  return (
    <div>
      <AppBar sx={{ backgroundColor: "black", color: "white" }} >
        <Toolbar>
          <EmojiEmotionsIcon />
          <Typography to="/Search" className={style.label} component={NavLink} sx={{ marginLeft: "10px",color: "white" }}>
            <h1>
                Toonistan
            </h1>
          </Typography >
          <Tabs textColor='primary' 
          indicatorColor='secondary' 
          sx={{ marginLeft: "4%" }} 
          value={value} 
          onChange={handleOnChange}>
            <Tab component={NavLink} style={{ color:"white"}} to="/" className={style.label} label="Home" />
            <Tab component={NavLink} to="/Favourite" className={style.label} style={{ color:"white"}} label="Favourite Toon" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

