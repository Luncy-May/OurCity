import React from 'react'

const BackgroundImage = ({name, imagePath}) => {
  return (
    <div>
      <img alt = {name} src={imagePath} className='min-w-screen min-h-screen object-cover brightness-50'/>
    </div>
  )
}

export default BackgroundImage
