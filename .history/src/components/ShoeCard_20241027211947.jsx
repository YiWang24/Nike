import React from 'react'

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImage}) => {
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage===imgURL}`}>
      123
    </div>
  )
}

export default ShoeCard
