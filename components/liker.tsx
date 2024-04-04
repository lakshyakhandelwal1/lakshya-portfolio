"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const Liker = () => {

  const [liked, setLiked] = useState<boolean>(false);
  const heart = liked ? "/assets/icons/filled-heart.svg" : "/assets/icons/unfilled-heart.svg";
  const size = liked ? 'w-12 scale-150 transition-all' : 'w-12 scale-100 transition-all'; 

  return (
    <span className=''>
      <Image src={heart} className={size} width={100} height={100} alt='heart' onClick={() => setLiked(!liked)}/>
    </span>
  )
}

export default Liker