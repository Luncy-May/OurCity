import React from 'react'

const BackgroundImage = ({name, imagePath}) => {
  return (
    <div>
      <img alt = {name} src={imagePath} className='w-screen h-screen object-cover brightness-50'/>
    </div>
  )
}

export default BackgroundImage
