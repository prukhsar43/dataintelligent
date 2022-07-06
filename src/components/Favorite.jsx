import React from 'react'
import LikedCard from './LikedCard';
import { liked } from './Card';

const Favorite = () => {

  localStorage.getItem('liked')

  return (
    <div>
      {liked.map((ele, i) => {
        return (
          <LikedCard ele={ele}
            i={i} />
        )
      })}
    </div>
  )
}

export default Favorite
