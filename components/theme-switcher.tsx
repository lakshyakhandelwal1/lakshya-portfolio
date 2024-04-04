"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const ThemeSwitcher = () => {

  const [theme, setTheme] = useState<boolean>(true);

  const changeMode = () => {
    if(theme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    setTheme(!theme)
  }

  return (
    <span onClick={changeMode}>
      {theme ? 
      <Image src={"/assets/icons/light.svg"} width={100} height={100} className='w-6' alt='light'/> :
      <Image src={"/assets/icons/dark.svg"} width={100} height={100} className='w-6' alt='dark'/> 
    }
    </span>
  )
}

export default ThemeSwitcher